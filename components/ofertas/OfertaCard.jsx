import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import styled from "styled-components";
import Link from "next/link";
import ofertaType from "../../types/ofertaType";
import Icon from "../ui/icons/Icon";
import { centavosParaReais } from "../../helpers/valores";
import { storageUrl } from "../../helpers/url";

const Card = styled.a`
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 2rem;
  box-shadow: ${(props) => props.theme.boxShadows.stronger};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(14rem, auto);
  grid-row-gap: 1rem;
  align-content: center;
`;

const Topo = styled.div`
  text-align: center;
  position: relative;
  .porcentagem-circulo {
    position: absolute;
    width: 6rem;
    height: 6rem;
    background: ${(props) => props.theme.client.colors.verdeSucesso};
    color: ${(props) => props.theme.client.colors.cinza};
    font-size: 2rem;
    font-weight: 500;
    top: 0;
    left: 0;
    border-radius: 50%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

const Thumb = styled.img`
  margin: 0 auto;
  max-height: 26rem;
`;

const IconStar = styled(Icon)`
  fill: ${(props) => props.theme.colors.gold};
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .titulo {
    font-weight: 500;
    font-size: 2rem;
  }
  .info,
  .marca {
    color: ${(props) => props.theme.colors.lessLighterGrey};
    font-size: 1.5rem;
  }
  .estrelas {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .valores {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 0.5rem;
    .de {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.lessLighterGrey};
      text-decoration: line-through;
      margin-right: 0.5rem;
    }
    .atual {
      font-size: 1.9rem;
    }
  }
  .desconto {
    font-size: 2.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.client.colors.verdeClaro};
    text-transform: uppercase;
  }
  .dia-unico {
    color: ${(props) => props.theme.client.colors.laranja};
  }
  .observacao {
    font-size: 1.4rem;
    margin-top: auto;
  }
`;

const geraEstrelas = (rating) =>
  Array.from(Array(5), (_, key) => `star${key < rating ? "-full" : "-empty"}`);

const Oferta = ({
oferta: {
    thumbs,
    titulo,
    info,
    marca,
    rating,
    valor_de,
    valor_atual,
    desconto_figurativo,
    observacao,
    datas,
  },
}) => {
  const { dia_unico } = datas || {};

  return (
    <Link href="/lojas" passHref>
      <Card title={titulo}>
        <Topo>
          <picture>
            {thumbs.map(({ path, type }) => (
              <source
                type={`image/${type}`}
                srcSet={`${storageUrl()}${path}`}
                key={path}
              />
            ))}
            <Thumb alt={titulo} />
          </picture>
          {!!desconto_figurativo && (
            <span className="porcentagem-circulo">
              {`-${desconto_figurativo}%`}
            </span>
          )}
        </Topo>
        <Infos>
          <h3 className="titulo">{titulo}</h3>
          {!!info && <span className="info">{info}</span>}
          {!!marca && <span className="marca">{marca}</span>}
          {!!rating && (
            <div className="estrelas">
              {geraEstrelas(rating).map((starIcon, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <IconStar key={`${starIcon}-${i}`} tipo="svg" icon={starIcon} />
              ))}
            </div>
          )}
          {(!!valor_de || !!valor_atual) && (
            <div className="valores">
              {!!valor_de && (
                <span className="de">
                  {`R$ ${centavosParaReais(valor_de)}`}
                </span>
              )}
              {!!valor_atual && (
                <strong className="atual">
                  {`R$ ${centavosParaReais(valor_atual)}`}
                </strong>
              )}
            </div>
          )}
          {!!desconto_figurativo && (
            <span className="desconto">{`${desconto_figurativo}% off`}</span>
          )}
          {!!dia_unico && (
            <span className="dia-unico">
              {format(new Date(dia_unico), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </span>
          )}
          {!observacao && <span className="observacao">{observacao}</span>}
        </Infos>
      </Card>
    </Link>
  );
};

Oferta.propTypes = {
  oferta: ofertaType.isRequired,
};

export default Oferta;
