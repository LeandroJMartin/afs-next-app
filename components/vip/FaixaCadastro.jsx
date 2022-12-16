/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import { getAbsoluteUrl } from "../../helpers/url";
import Container from "../ui/containers/Container";
import Input from "../formulario/Input";
import InputMasked from "../formulario/InputMasked";
import ButtonSucesso from "../ui/buttons/ButtonSucesso";
import CircleLoading from "../ui/loadings/Circle";
import { scrollToElement } from "../../helpers/window";
import { celularMask } from "../../helpers/masks";
import { validacao } from "../../helpers/formularioVip";

import PropTypes from "prop-types";

const Faixa = styled.div`
  min-height: 4rem;
  padding: 2rem 0;
  background: ${props => props.theme.client.colors.verdeEscuro};

  color: white;
`;

const Conteudo = styled.div`
  /* display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */

  display: flex;
  justify-content: space-between;

  .loading-wrapper {
    align-self: center;
    justify-self: center;
  }
  .feedback {
    font-size: 1.8rem;
    font-weight: 500;
    justify-self: center;
  }

  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Call = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.8rem;
    margin-left: 1rem;
    text-align: center;
    max-width: 30rem;
    width: 100%;
  }

  @media (max-width: 1030px) {
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 70rem;
  width: 100%;
  justify-content: space-between;

  .inputs {
    justify-content: space-between;
    display: flex;
    width: 100%;
    margin: 0 2rem;

    @media (max-width: 550px) {
      flex-direction: column;
      align-items: center;

      div {
        margin: 1rem 0;
      }
    }
  }
  .cadastro-vip-input {
    max-width: 16rem;
  }

  @media ${props => props.theme.devices.tablet} {
    flex-direction: column;
    ${ButtonSucesso} {
      margin-top: 2rem;
    }
  }
`;

const FaixaCadastro = ({ unidade }) => {
  const [lead, setLead] = useState({
    nome: "",
    email: "",
    celular: "",
    url: ""
  });
  const [status, setStatus] = useState("blank");

  const [validado, setValidado] = useState(true);

  const enviaLead = async leadData => {
    const validou = validacao(leadData);

    if (!validou) {
      setValidado(false);
      return false;
    }

    try {
      setStatus("enviando");
      await (await fetch(`${getAbsoluteUrl("front")}/api/fidelidade/criar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...leadData
        })
      })).json();
      setStatus("enviado");

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
            email: lead.email,
            nome: lead.nome,
            celular: lead.celular,
            url: lead.url,
            unidade: unidade || ""
          })
        });
      };

      const integracao = async () => {
        return await integracaoRdStation();
      };
      integracao();

      // fazendo redir
      setTimeout(() => {
        window.sessionStorage.setItem("ListaVipPreenchida", true);

        Router.push("/lista-vip");
      }, 2000);
    } catch (error) {
      setStatus("erro");
    }
  };

  const handleInput = ({ currentTarget: { value, name } }) => {
    setLead({ ...lead, [name]: value });
  };

  useEffect(() => {
    // identifica se existe um submit get do form AMP -- users vindo das AMPs
    const urlParams = new URLSearchParams(window.location.search);
    const [nome, email] = [urlParams.get("nome"), urlParams.get("email")];
    if (nome && email) {
      // removendo parametros da url
      scrollToElement(".faixa-fidelidade");
      window.history.replaceState(null, null, window.location.pathname);
      enviaLead({
        nome,
        email
      });
    }
  }, ["once"]);

  const handleSubmit = async e => {
    e.preventDefault();
    lead.url = window.location.pathname;
    enviaLead(lead);
  };

  return (
    <Faixa className="faixa-fidelidade">
      <Container>
        <Conteudo>
          <Call>
            <picture>
              <source type="image/webp" srcSet="/static/img/vip.webp" />
              <source type="image/png" srcSet="/static/img/vip.png" />
              <img alt="Programa Fidelidade" />
            </picture>
            <p>
              Cadastre-se para participar do nosso programa fidelidade e receber
              descontos exclusivos!
            </p>
          </Call>
          {status === "blank" && (
            <Form onSubmit={handleSubmit}>
              <div className="inputs">
                <Input
                  nome="nome"
                  placeholder="Seu nome"
                  handleInput={handleInput}
                  valor={lead.nome}
                  valido={validado}
                  className="cadastro-vip-input"
                  tipo="text"
                />
                <Input
                  nome="email"
                  placeholder="Seu E-mail"
                  handleInput={handleInput}
                  valor={lead.email}
                  valido={validado}
                  className="cadastro-vip-input"
                  tipo="email"
                />
                <InputMasked
                  nome="celular"
                  valor={lead.celular}
                  handleInput={handleInput}
                  placeholder="Celular/Whatsapp"
                  valido={validado}
                  tipo="text"
                  mask={celularMask}
                  className="cadastro-vip-input"
                />
              </div>
              <ButtonSucesso type="submit">Cadastrar</ButtonSucesso>
            </Form>
          )}
          {status === "enviando" && (
            <div className="loading-wrapper">
              <CircleLoading corCliente="laranja" />
            </div>
          )}
          {status === "enviado" && (
            <span className="feedback">
              Obrigado. Aguarde novidades no seu e-mail!
            </span>
          )}
          {status === "erro" && (
            <span className="feedback">
              Ops, algo deu errado! Tente novamente mais tarde.
            </span>
          )}
        </Conteudo>
      </Container>
    </Faixa>
  );
};

FaixaCadastro.propTypes = {
  unidade: PropTypes.string
};

export default FaixaCadastro;
