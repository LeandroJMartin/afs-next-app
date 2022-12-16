/* eslint-disable consistent-return */
import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Status from "./Status";
import Loader from "./Loader";

import {
  validacaoPsicologa,
  infosErro,
  infosSucesso
} from "../../helpers/formulario";
import {
  Form,
  FormInputs,
  FormButton,
  StatusWrapper
} from "../ui/formulario/FormStyles";

import { getAbsoluteUrl } from "../../helpers/url";

function FormularioSetembroAmarelo() {
  const [contato, setContato] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [controles, setControles] = useState({
    erro: false,
    enviando: false,
    sucesso: false,
    valido: true
  });

  function handleInput({ currentTarget: { value, name } }) {
    setContato({ ...contato, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validou = validacaoPsicologa(contato);

    if (!validou) {
      setControles({
        ...controles,
        valido: false
      });

      return false;
    }

    setControles({
      ...controles,
      enviando: true
    });

    await fetch(`${getAbsoluteUrl("front")}/api/contatos_psicologa/criar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: contato.nome,
        email: contato.email,
        mensagem: contato.mensagem
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
            sucesso: true,
            step2: true
          });

          window.history.pushState(
            {},
            "Agendamento Enviado com Sucesso!",
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
          <FormButton type="submit">Enviar Mensagem</FormButton>
        </Form>
      )}
    </>
  );
}

export default FormularioSetembroAmarelo;
