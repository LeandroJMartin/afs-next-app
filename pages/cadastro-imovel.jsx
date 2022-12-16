import styled from 'styled-components';
import { useState } from 'react';
import Head from 'next/head';

import { celularMask, telefoneMask, cepMask } from '../helpers/masks';
import { getAbsoluteUrl } from '../helpers/url';

import { FormButton, StatusWrapperImovel } from '../components/ui/formulario/FormStyles';
import TitleUpper from '../components/ui/tipografia/TitleUpper';
import BannerSimples from '../components/layout/BannerSimples';
import InputMasked from '../components/formulario/InputMasked';
import Container from '../components/ui/containers/Container';
import FaixaCadastro from '../components/vip/FaixaCadastro';
import Loader from '../components/formulario/Loader';
import Status from '../components/formulario/Status';
import Input from '../components/formulario/Input';

export const infosErro = {
  texto: 'Ocorreu um erro!',
  linkTexto: 'Clique aqui e tente novamente.',
  tipo: 'erro',
  href: '/',
};

export const infosSucesso = {
  texto: 'Seu cadastro foi enviado!',
  linkTexto: 'Veja também nossas ofertas.',
  tipo: 'sucesso',
  href: '/ofertas',
};

const Page = styled.div``;

const CadastroImovelTitle = styled(TitleUpper)`
  margin-top: 2rem;
  text-align: start;
`;

const FormularioWrapper = styled.div`
  margin-bottom: 8rem;
  margin-top: 4rem;
`;

const FormInputs = styled.div`
  max-width: 80rem;
  width: 100%;
`;

const FormButtonWrapper = styled.div`
  margin-top: 4rem;
  max-width: 80rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;

  @media(max-width: 900px) {
    flex-direction: column;
    margin: 0;
  }
`;

const CadastroImovel = () => {
  const [imovel, setImovel] = useState({
    nome: '',
    cep: '',
    cidade: '',
    uf: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    terreo: '',
    pavimento_um: '',
    pavimento_dois: '',
    tipo_oferta: '',
    condominio: '',
    iptu: '',
    obs: '',
    nome_ofertante: '',
    imobiliaria: '',
    email: '',
    telefone: '',
    celular: '',
  });

  const [controles, setControles] = useState({
    erro: false,
    sucesso: false,
    enviando: false,
  });

  function handleInput({ currentTarget: { value, name } }) {
    setImovel({
      ...imovel, [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setControles({
      ...controles, enviando: true,
    });

    await fetch(`${getAbsoluteUrl('front')}/api/cadastro_imoveis/criar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...imovel,
      }),
    })
      .then((resp) => {
        if (resp.status !== 200) {
          setControles({
            ...controles,
            sucesso: false,
            enviando: false,
            erro: true,
          });
        } else {
          setControles({
            ...controles,
            enviando: false,
            sucesso: true,
          });

          window.history.pushState(
            {},
            'Agendamento Enviado com Sucesso!',
            `${window.location.pathname}/sucesso`,
          );
        }
      })
      .catch(() => {
        setControles({
          ...controles,
          sucesso: false,
          enviando: false,
          erro: true,
        });
      });
  }

  return (
    <Page>
      <Head>
        <title>Armazém Fit Store - Cadastro de Imóvel</title>
        <meta
          name="description"
          key="description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Armazém Fit Store - Cadastro de Imóvel"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
      </Head>
      <BannerSimples bannerId="cadastro-imoveis" mostrarFolhas />
      <Container>
        <FormularioWrapper>
          {controles.enviando && !controles.erro && !controles.sucesso && (
          <StatusWrapperImovel>
            <p>
              <strong>Enviando contato...</strong>
            </p>
            <Loader />
          </StatusWrapperImovel>
          )}
          {!controles.erro && controles.sucesso && (
          <StatusWrapperImovel>
            <Status infos={infosSucesso} />
          </StatusWrapperImovel>
          )}
          {controles.erro && !controles.sucesso && (
          <StatusWrapperImovel>
            <Status infos={infosErro} />
          </StatusWrapperImovel>
          )}
          {!controles.enviando && !controles.erro && !controles.sucesso && (

          <form onSubmit={handleSubmit}>
            <CadastroImovelTitle corCliente="verdeFolha">Dados do Imóvel</CadastroImovelTitle>
            <FormInputs>
              <FormRow>
                <Input
                  nome="nome"
                  valor={imovel.nome}
                  handleInput={handleInput}
                  placeholder="Nome Completo"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
              <FormRow>
                <InputMasked
                  nome="cep"
                  valor={imovel.cep}
                  handleInput={handleInput}
                  placeholder="CEP"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                  mask={cepMask}
                />
                <Input
                  nome="cidade"
                  valor={imovel.cidade}
                  handleInput={handleInput}
                  placeholder="Cidade"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
                <Input
                  nome="uf"
                  valor={imovel.uf}
                  handleInput={handleInput}
                  placeholder="UF"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="endereco"
                  valor={imovel.endereco}
                  handleInput={handleInput}
                  placeholder="Endereço"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--medium"
                />
                <Input
                  nome="numero"
                  valor={imovel.numero}
                  handleInput={handleInput}
                  placeholder="Número"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="complemento"
                  valor={imovel.complemento}
                  handleInput={handleInput}
                  placeholder="Complemento"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--medium"
                />
                <Input
                  nome="bairro"
                  valor={imovel.bairro}
                  handleInput={handleInput}
                  placeholder="Bairro"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
              </FormRow>
            </FormInputs>
            <CadastroImovelTitle corCliente="verdeFolha">Área Construída (M²)</CadastroImovelTitle>
            <FormInputs>
              <FormRow>
                <Input
                  nome="terreo"
                  valor={imovel.terrei}
                  handleInput={handleInput}
                  placeholder="Térreo"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="pavimento_um"
                  valor={imovel.pavimento_um}
                  handleInput={handleInput}
                  placeholder="1º Pavimento"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="pavimento_dois"
                  valor={imovel.pavimento_dois}
                  handleInput={handleInput}
                  placeholder="2º Pavimento"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
            </FormInputs>
            <CadastroImovelTitle corCliente="verdeFolha">Valores (R$)</CadastroImovelTitle>
            <FormInputs>
              <FormRow>
                <Input
                  nome="tipo_oferta"
                  valor={imovel.tipo_oferta}
                  handleInput={handleInput}
                  placeholder="Tipo de Oferta"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
                <Input
                  nome="condominio"
                  valor={imovel.condominio}
                  handleInput={handleInput}
                  placeholder="Condomínio"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
                <Input
                  nome="iptu"
                  valor={imovel.iptu}
                  handleInput={handleInput}
                  placeholder="IPTU Anual"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="obs"
                  valor={imovel.obs}
                  handleInput={handleInput}
                  placeholder="Observações"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
            </FormInputs>
            <CadastroImovelTitle corCliente="verdeFolha">Dados do Ofertante</CadastroImovelTitle>
            <FormInputs>
              <FormRow>
                <Input
                  nome="nome_ofertante"
                  valor={imovel.nome_ofertante}
                  handleInput={handleInput}
                  placeholder="Nome Completo"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="imobiliaria"
                  valor={imovel.imobiliaria}
                  handleInput={handleInput}
                  placeholder="Imobiliária"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--large"
                />
              </FormRow>
              <FormRow>
                <Input
                  nome="email"
                  valor={imovel.email}
                  handleInput={handleInput}
                  placeholder="E-mail"
                  valido
                  tipo="email"
                  className="select-input-imovel select-input-imovel--tiny"
                />
                <InputMasked
                  nome="telefone"
                  valor={imovel.telefone}
                  handleInput={handleInput}
                  placeholder="Telefone"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                  mask={telefoneMask}
                />
                <InputMasked
                  nome="celular"
                  valor={imovel.celular}
                  handleInput={handleInput}
                  placeholder="Celular"
                  valido
                  tipo="text"
                  className="select-input-imovel select-input-imovel--tiny"
                  mask={celularMask}
                />
              </FormRow>
            </FormInputs>
            <FormButtonWrapper>
              <FormButton>
                    Enviar
              </FormButton>
            </FormButtonWrapper>
          </form>
          )}
        </FormularioWrapper>
      </Container>
      <FaixaCadastro />
    </Page>
  );
};

export default CadastroImovel;
