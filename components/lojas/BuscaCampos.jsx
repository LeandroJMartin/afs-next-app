import { useState, useEffect } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import BuscaGeo from "./BuscaGeo";

import { getAbsoluteUrl } from "../../helpers/url";
import Select from "../formulario/Select";
import ListaLojas from "./ListaLojas";

const BuscaWrapper = styled.div`
  .erro-geo {
    text-align: center;
    margin: 0.5rem auto;
    color: ${props => props.theme.client.colors.laranja};
  }
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 20rem));
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;
  padding: 1rem 1rem;
  .select-input {
    background: #eaeaea;
    width: 14rem;
    border-radius: 5rem;
  }
`;

const Resultados = styled.ul``;

const compilaUfs = lojas =>
  lojas
    ? lojas
        .reduce((total, { endereco }) => {
          if (endereco && !total.includes(endereco.uf)) {
            return [...total, endereco.uf];
          }
          return total;
        }, [])
        .sort((a, b) => (a > b ? 1 : -1))
    : [];

const compilaCidades = lojas =>
  lojas
    ? lojas
        .reduce((total, { endereco }) => {
          if (endereco && !total.includes(endereco.cidade)) {
            return [...total, endereco.cidade];
          }
          return total;
        }, [])
        .sort((a, b) => (a > b ? 1 : -1))
    : [];

const lojasPorUf = (lojas, uf) =>
  uf ? lojas.filter(({ endereco }) => endereco && endereco.uf === uf) : [];

const cidadesPorUf = (lojas, uf) =>
  uf
    ? lojasPorUf(lojas, uf)
        .reduce((total, { endereco }) => {
          if (endereco && !total.includes(endereco.cidade)) {
            return [...total, endereco.cidade];
          }
          return total;
        }, [])
        .sort((a, b) => (a > b ? 1 : -1))
    : [];

const lojasPorCidade = (lojas, cidade) =>
  cidade
    ? lojas.filter(({ endereco }) => endereco && endereco.cidade === cidade)
    : [];

const BuscaCampos = ({ modo }) => {
  const [lojas, setLojas] = useState([]);
  const [ufEscolhido, setUfEscolhido] = useState("");
  const [cidadeEscolhida, setCidadeEscolhida] = useState("");
  const [erroCidadeGeo, setErroCidadeGeo] = useState(false);

  const buscaLojas = async () => {
    const { lojas: lojasEncontradas } = await (
      await fetch(`${getAbsoluteUrl("front")}/api/lojas`)
    ).json();
    // salva as loja
    setLojas(lojasEncontradas);
  };

  // carregando todas as lojas
  useEffect(() => {
    buscaLojas();
  }, ["once"]);

  const handleEstado = ({ currentTarget: { value } }) => {
    setUfEscolhido(value);
    setCidadeEscolhida("");
  };

  const handleCidade = ({ currentTarget: { value } }) => {
    setCidadeEscolhida(value);
  };

  const handleCidadeGeo = cidadeGeo => {
    const cidades = compilaCidades(lojas);
    if (cidades.includes(cidadeGeo)) {
      setCidadeEscolhida(cidadeGeo);
    } else {
      setErroCidadeGeo(true);
    }
  };

  const ufs = compilaUfs(lojas);
  const cidades = cidadesPorUf(lojas, ufEscolhido);
  const lojasDisponiveis = lojasPorCidade(lojas, cidadeEscolhida);

  // se houver somente uma loja disponivel, ja faz o redir
  if (lojasDisponiveis && lojasDisponiveis.length === 1 && modo !== "balcao") {
    const [{ path }] = lojasDisponiveis;
    Router.push(`/${path}`);
  }

  return (
    <BuscaWrapper>
      <Inputs>
        <Select
          valores={ufs}
          placeholder="Estado"
          handleInput={handleEstado}
          valor={ufEscolhido}
          nome="uf"
          carregando={!ufs.length}
          className="select-input--tiny"
          valido
        />
        <Select
          valores={cidades}
          placeholder="Cidade"
          handleInput={handleCidade}
          valor={cidadeEscolhida}
          nome="cidade"
          carregando={!ufs.length}
          className="select-input--tiny"
          valido
        />
        <BuscaGeo
          erroCidadeGeo={erroCidadeGeo}
          setCidade={handleCidadeGeo}
          carregado={!!ufs.length}
          setErroCidadeGeo={setErroCidadeGeo}
        />
      </Inputs>
      <Resultados>
        {!!erroCidadeGeo && (
          <p className="erro-geo">
            Ops! Algo deu errado. Por favor, busque usando os campos acima.
          </p>
        )}
        {!!lojasDisponiveis.length && (
          <ListaLojas modo={modo} lojasLinks={lojasDisponiveis} />
        )}
      </Resultados>
    </BuscaWrapper>
  );
};

BuscaCampos.propTypes = {
  modo: PropTypes.oneOf(["balcao", "hotsite"])
};

BuscaCampos.defaultProps = {
  modo: "hotsite"
};

export default BuscaCampos;
