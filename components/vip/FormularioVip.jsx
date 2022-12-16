/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Input from "../formulario/Input";
import InputMasked from "../formulario/InputMasked";
import Status from "../formulario/Status";
import Loader from "../formulario/Loader";

import { celularMask } from "../../helpers/masks";
import {
  validacao,
  infosErro,
  infosSucesso
} from "../../helpers/formularioVip";
import {
  Form,
  FormInputs,
  FormButton,
  StatusWrapper
} from "../ui/formulario/FormStyles";

import { getAbsoluteUrl } from "../../helpers/url";

export default function FormularioVip() {
  const [contato, setContato] = useState({
    nome: "",
    email: "",
    celular: "",
    url: ""
  });

  const [controles, setControles] = useState({
    erro: false,
    enviando: false,
    sucesso: false,
    valido: true
  });

  useEffect(() => {
    var formPreenchido = window.sessionStorage.getItem("ListaVipPreenchida");
    if (formPreenchido) {
      setControles({
        ...controles,
        sucesso: true
      });
      window.history.pushState(
        {},
        "Agendamento Enviado com Sucesso!",
        `${window.location.pathname}/sucesso`
      );
      window.sessionStorage.removeItem("ListaVipPreenchida");
    }
  }, []);

  function handleInput({ currentTarget: { value, name } }) {
    setContato({ ...contato, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    contato.url = window.location.pathname;

    const validou = validacao(contato);

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

    /*Integração RD Station*/
    const integracaoRdStation = async () => {
      return await fetch("https://www.rdstation.com.br/api/1.3/conversions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token_rdstation: "3081eac95f9628db57a9ffcc563b2a30",
          identificador: "Lista-Vip",
          email: contato.email,
          nome: contato.nome,
          celular: contato.celular,
          url: contato.url,
          unidade: ""
        })
      });
    };

    const integracao = async () => {
      return await integracaoRdStation();
    };
    integracao();

    await fetch(`${getAbsoluteUrl("front")}/api/fidelidade/criar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...contato
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
          </FormInputs>
          <FormButton type="submit">Entrar na lista Vip</FormButton>
        </Form>
      )}
    </>
  );
}

FormularioVip.propTypes = {
  unidade: PropTypes.string
};
