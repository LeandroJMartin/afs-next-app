/* eslint-disable consistent-return */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputMasked from './InputMasked';
import Select from './Select';
import Status from './Status';
import Loader from './Loader';

import { celularMask } from '../../helpers/masks';
import { validacao, infosErro, infosSucesso } from '../../helpers/formulario';
import {
  Form, FormInputs, FormButton, StatusWrapper,
} from '../ui/formulario/FormStyles';

import { getAbsoluteUrl } from '../../helpers/url';


function Formulario({ assuntos, type }) {
  const [contato, setContato] = useState({
    nome: '',
    email: '',
    celular: '',
    assunto: '',
    mensagem: '',
  });

  const [controles, setControles] = useState({
    erro: false,
    enviando: false,
    sucesso: false,
    valido: true,
  });


  function handleInput({ currentTarget: { value, name } }) {
    setContato({ ...contato, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validou = validacao(contato, assuntos);

    if (!validou) {
      setControles({
        ...controles, valido: false,
      });

      return false;
    }

    setControles({
      ...controles, enviando: true,
    });

    await fetch(`${getAbsoluteUrl('front')}/api/contatos/criar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: contato.nome,
        email: contato.email,
        celular: contato.celular,
        assunto: type === 'nutri' ? 'Fale com a Nutri' : contato.assunto,
        mensagem: contato.mensagem,
        type,
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
            sucesso: true,
            step2: true,
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
    <>
      {controles.enviando && !controles.erro && !controles.sucesso && (
      <StatusWrapper>
        <p>
          <strong>Enviando contato...</strong>
        </p>
        <Loader />
      </StatusWrapper>
      )}
      {!controles.erro && controles.sucesso && (
        <StatusWrapper>
          <Status infos={infosSucesso} />
        </StatusWrapper>
      )}
      {controles.erro && !controles.sucesso && (
        <StatusWrapper>
          <Status infos={infosErro} />
        </StatusWrapper>
      )}
      {!controles.enviando && !controles.erro && !controles.sucesso && (
        <Form onSubmit={handleSubmit}>
          <FormInputs>
            <Input
              nome="nome"
              valor={contato.nome}
              handleInput={handleInput}
              placeholder="Nome Completo"
              valido={controles.valido}
              tipo="text"
              className="select-input--cinza"
            />
            <Input
              nome="email"
              valor={contato.email}
              handleInput={handleInput}
              placeholder="E-mail"
              valido={controles.valido}
              tipo="email"
              className="select-input--cinza"
            />
            <InputMasked
              nome="celular"
              valor={contato.celular}
              handleInput={handleInput}
              placeholder="Celular/Whatsapp"
              valido={controles.valido}
              tipo="text"
              mask={celularMask}
              className="select-input--cinza"
            />
            {assuntos && (
            <Select
              valores={assuntos}
              nome="assunto"
              valor={contato.assunto}
              handleInput={handleInput}
              placeholder="Selecione o assunto"
              valido={controles.valido}
              tipo="text"
              className="select-input--cinza"
            />
            )}
            <Input
              nome="mensagem"
              valor={contato.mensagem}
              handleInput={handleInput}
              placeholder="Mensagem"
              valido={controles.valido}
              tipo="text"
              className="select-input--cinza"
              textarea
            />
          </FormInputs>
          <FormButton type="submit">
          Enviar Mensagem
          </FormButton>
        </Form>
      )}
    </>
  );
}

Formulario.propTypes = {
  assuntos: PropTypes.oneOfType([PropTypes.arrayOf([PropTypes.string]), PropTypes.bool]),
  type: PropTypes.string.isRequired,
};

Formulario.defaultProps = {
  assuntos: false,
};

export default Formulario;
