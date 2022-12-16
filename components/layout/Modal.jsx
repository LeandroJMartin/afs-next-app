import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import styled from 'styled-components';
import Icon from '../ui/icons/Icon';

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const Card = styled.div`
  width: 40rem;
  max-width: 98vw;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  position: relative;
`;

const Fechar = styled.span`
  position: absolute;
  right: 0.9rem;
  top: 0.9rem;
  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${(props) => props.theme.colors.lessLighterGrey};
  }
`;

const Modal = ({ children, fechar }) => (
  <ModalWrapper onClick={fechar}>
    <Fade>
      <Card>
        <Fechar>
          <Icon tipo="svg" icon="close" />
        </Fechar>
        {children}
      </Card>
    </Fade>
  </ModalWrapper>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  fechar: PropTypes.func.isRequired,
};

export default Modal;
