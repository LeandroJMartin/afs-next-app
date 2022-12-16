import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import telefoneType from '../../types/telefoneType';
import Button from '../ui/buttons/Button';
import Icon from '../ui/icons/Icon';
import { limpaTelefone } from '../../helpers/telefones';

const TelefonesWrapper = styled.div`
  margin-top: 1rem;
  .telefone {
    display: flex;
    align-items: center;
    font-size: inherit;
    ${Button} {
      background: ${(props) => props.theme.client.colors.verdeSucesso};
      margin-left: 1.5rem;
      border-radius: 3px;
      box-shadow: none;
    }
    svg {
      fill: white;
      margin-right: 1rem;
    }
    &:not(:first-of-type) {
      margin-top: 1.5rem;
    }
  }
`;

const Telefones = ({ telefones }) => (
  <TelefonesWrapper>
    <ul className="telefones">
      {telefones.map(({ numero, whatsapp }) => (
        <li className="telefone" key={numero}>
          {numero}
          {whatsapp ? (
            <a href={`https://wa.me/55${limpaTelefone(numero)}`}>
              <Button center>
                <Icon tipo="svg" icon="whatsapp" tamanho="2rem" />
                Enviar WhatsApp
              </Button>
            </a>
          ) : (
            <a href={`tel:${limpaTelefone(numero)}`}>
              <Button center>
                <Icon tipo="svg" icon="phone" tamanho="2rem" />
                Ligar
              </Button>
            </a>
          )}
        </li>
      ))}
    </ul>
  </TelefonesWrapper>
);

Telefones.propTypes = {
  telefones: PropTypes.arrayOf(telefoneType).isRequired,
};

export default Telefones;
