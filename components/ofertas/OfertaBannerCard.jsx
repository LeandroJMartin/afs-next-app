import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styled from 'styled-components';
import Link from 'next/link';
import ofertaType from '../../types/ofertaType';
import { storageUrl } from '../../helpers/url';

const Card = styled.a`
  padding: 1.5rem 1rem;
  background: url('${(props) => `${storageUrl()}${props.fundo}`}');
  background-size: contain;
  background-position: top right;
  background-repeat: no-repeat;
  background-color: ${(props) => props.fundoCor || 'white'};
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
  height: 19rem;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Oferta = ({
  oferta: {
    titulo, datas, fundo, cor_fundo,
  },
}) => {
  console.log(fundo, cor_fundo);

  const { de, ate } = datas;

  return (
    <Link href="/ofertas" passHref>
      <Card fundoCor={cor_fundo} fundo={fundo} title={titulo}>
        <Topo />
        <Infos>{/* <h3 className="titulo">{titulo}</h3> */}</Infos>
      </Card>
    </Link>
  );
};

Oferta.propTypes = {
  oferta: ofertaType.isRequired,
};

export default Oferta;
