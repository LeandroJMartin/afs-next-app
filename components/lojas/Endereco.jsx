import React from 'react';
import styled from 'styled-components';
import { enderecoType } from '../../types/lojaType';

const EnderecoWrapper = styled.div`
  p {
    margin-top: 1rem;
  }
`;

const Endereco = ({
  endereco: {
    logradouro, bairro, complemento, cidade, uf, cep,
  },
}) => (
  <EnderecoWrapper>
    <p className="info">
      {`${logradouro}, ${bairro}`}
      {!!complemento && `, ${complemento}`}
      {!!cep && `, ${cep}`}
    </p>
    <p className="info">{`${cidade}/${uf}`}</p>
  </EnderecoWrapper>
);

Endereco.propTypes = {
  endereco: enderecoType.isRequired,
};

export default Endereco;
