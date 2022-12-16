import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";

import { celularMask, telefoneMask, cepMask } from "../helpers/masks";

import { validaTelefone, validacaoFornecedor } from "../helpers/formulario";

import { getAbsoluteUrl } from "../helpers/url";

import {
  FormButton,
  StatusWrapperImovel
} from "../components/ui/formulario/FormStyles";
import TitleUpper from "../components/ui/tipografia/TitleUpper";
import BannerSimples from "../components/layout/BannerSimples";
import InputMasked from "../components/formulario/InputMasked";
import Container from "../components/ui/containers/Container";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import Loader from "../components/formulario/Loader";
import Status from "../components/formulario/Status";
import Input from "../components/formulario/Input";

export const infosErro = {
  texto: "Ocorreu um erro!",
  linkTexto: "Clique aqui e tente novamente.",
  tipo: "erro",
  href: "/"
};

export const infosSucesso = {
  texto: "Seu cadastro foi enviado!",
  linkTexto: "Veja também nossas ofertas.",
  tipo: "sucesso",
  href: "/ofertas"
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

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0;
  }
`;

const CadastroFornecedor = () => {
  const [fornecedor, setFornecedor] = useState({
    razaoSocial: "",
    pessoa: "",
    cnpjCpf: "",
    nomeFantasia: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    pais: "",
    cep: "",
    nomeRepresante: "",
    celular: "",
    fixo: "",
    funcao: "",
    emailPedidos: "",
    site: "",
    instagram: "",
    facebook: "",
    tweeter: "",
    whatsapp: "",
    ramoAtividade: "",
    cnae: "",
    contribuinteIcms: ""
  });

  const [controles, setControles] = useState({
    erro: false,
    sucesso: false,
    enviando: false,
    valido: true
  });

  function handleInput({ currentTarget: { value, name } }) {
    setFornecedor({
      ...fornecedor,
      [name]: value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setControles({
      ...controles,
      enviando: true
    });

    const valid = await validacaoFornecedor(fornecedor);

    if (!valid) {
      setControles({
        ...controles,
        valido: false
      });

      return false;
    }

    await fetch(`${getAbsoluteUrl("front")}/api/cadastro_fornecedor/criar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...fornecedor
      })
    })
      .then(resp => {
        if (resp.status !== 200) {
          setControles({
            ...controles,
            sucesso: false,
            enviando: false,
            erro: true
          });
        } else {
          setControles({
            ...controles,
            enviando: false,
            sucesso: true
          });

          window.history.pushState(
            {},
            "Fornecedor Cadastrado com Sucesso!",
            `${window.location.pathname}/sucesso`
          );
        }
      })
      .catch(() => {
        setControles({
          ...controles,
          sucesso: false,
          enviando: false,
          erro: true
        });
      });
  }

  return (
    <Page>
      <Head>
        <title>Armazém Fit Store - Cadastro de Fornecedor</title>
        <meta
          name="description"
          key="description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Armazém Fit Store - Cadastro de Fornecedor"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
      </Head>
      <BannerSimples bannerId="cadastro-fornecedor" mostrarFolhas />
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
              <CadastroImovelTitle corCliente="verdeFolha">
                Ficha Cadastral de Fornecedor
              </CadastroImovelTitle>
              <FormInputs>
                <FormRow>
                  <Input
                    nome="razaoSocial"
                    valor={fornecedor.razaoSocial}
                    handleInput={handleInput}
                    placeholder="Razão Social"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--large"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="pessoa"
                    valor={fornecedor.pessoa}
                    handleInput={handleInput}
                    placeholder="Pessoa (F/J)"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <InputMasked
                    nome="cnpjCpf"
                    valor={fornecedor.cnpjCpf}
                    handleInput={handleInput}
                    placeholder="CNPJ/CPF"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                    mask="cpf/cnpj"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="nomeFantasia"
                    valor={fornecedor.nomeFantasia}
                    handleInput={handleInput}
                    placeholder="Nome Fantasia"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--large"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="endereco"
                    valor={fornecedor.endereco}
                    handleInput={handleInput}
                    placeholder="Endereço"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <Input
                    nome="numero"
                    valor={fornecedor.numero}
                    handleInput={handleInput}
                    placeholder="Número"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="complemento"
                    valor={fornecedor.complemento}
                    handleInput={handleInput}
                    placeholder="Complemento"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <Input
                    nome="bairro"
                    valor={fornecedor.bairro}
                    handleInput={handleInput}
                    placeholder="Bairro"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="cidade"
                    valor={fornecedor.cidade}
                    handleInput={handleInput}
                    placeholder="Cidade"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <Input
                    nome="uf"
                    valor={fornecedor.uf}
                    handleInput={handleInput}
                    placeholder="UF"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="pais"
                    valor={fornecedor.pais}
                    handleInput={handleInput}
                    placeholder="País"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <InputMasked
                    nome="cep"
                    valor={fornecedor.cep}
                    handleInput={handleInput}
                    placeholder="CEP"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                    mask={cepMask}
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="nomeRepresante"
                    valor={fornecedor.nomeRepresante}
                    handleInput={handleInput}
                    placeholder="Nome do Represante"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <InputMasked
                    nome="celular"
                    valor={fornecedor.celular}
                    handleInput={handleInput}
                    placeholder="Telefone Celular"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                    mask={celularMask}
                    custom={
                      fornecedor.celular
                        ? validaTelefone(fornecedor.celular)
                        : true
                    }
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="funcao"
                    valor={fornecedor.funcao}
                    handleInput={handleInput}
                    placeholder="Função/Cargo"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <InputMasked
                    nome="fixo"
                    valor={fornecedor.fixo}
                    handleInput={handleInput}
                    placeholder="Telefone Fixo"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                    mask={telefoneMask}
                    custom={
                      fornecedor.fixo ? validaTelefone(fornecedor.fixo) : true
                    }
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="emailPedidos"
                    valor={fornecedor.emailPedidos}
                    handleInput={handleInput}
                    placeholder="E-mail para Pedidos"
                    valido={controles.valido}
                    tipo="email"
                    className="select-input-imovel select-input-imovel--large"
                  />
                </FormRow>
              </FormInputs>
              <CadastroImovelTitle corCliente="verdeFolha">
                Redes Sociais
              </CadastroImovelTitle>
              <FormInputs>
                <FormRow>
                  <Input
                    nome="site"
                    valor={fornecedor.site}
                    handleInput={handleInput}
                    placeholder="Site"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                  <Input
                    nome="instagram"
                    valor={fornecedor.instagram}
                    handleInput={handleInput}
                    placeholder="Instagram"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                  <Input
                    nome="facebook"
                    valor={fornecedor.facebook}
                    handleInput={handleInput}
                    placeholder="Facebook"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="tweeter"
                    valor={fornecedor.tweeter}
                    handleInput={handleInput}
                    placeholder="Tweeter"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <InputMasked
                    nome="whatsapp"
                    valor={fornecedor.whatsapp}
                    handleInput={handleInput}
                    placeholder="Whatsapp"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                    mask={celularMask}
                    custom={
                      fornecedor.whatsapp
                        ? validaTelefone(fornecedor.whatsapp)
                        : true
                    }
                  />
                </FormRow>
                <CadastroImovelTitle corCliente="verdeFolha">
                  Dados da Empresa
                </CadastroImovelTitle>
                <FormRow>
                  <Input
                    nome="ramoAtividade"
                    valor={fornecedor.ramoAtividade}
                    handleInput={handleInput}
                    placeholder="Ramo de Atividade"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--medium"
                  />
                  <Input
                    nome="cnae"
                    valor={fornecedor.cnae}
                    handleInput={handleInput}
                    placeholder="CNAE"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--tiny"
                  />
                </FormRow>
                <FormRow>
                  <Input
                    nome="contribuinteIcms"
                    valor={fornecedor.contribuinteIcms}
                    handleInput={handleInput}
                    placeholder="Contribuinte ICMS"
                    valido={controles.valido}
                    tipo="text"
                    className="select-input-imovel select-input-imovel--large"
                  />
                </FormRow>
              </FormInputs>
              <FormButtonWrapper>
                <FormButton>Enviar</FormButton>
              </FormButtonWrapper>
            </form>
          )}
        </FormularioWrapper>
      </Container>
      <FaixaCadastro />
    </Page>
  );
};

export default CadastroFornecedor;
