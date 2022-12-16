import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.corCliente
    ? props.theme.client.colors[props.corCliente]
    : props.theme.colors.black)};
  color: white;
  border-radius: 15px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: ${(props) => props.center || 'initial'};
  font-size: 1.6rem;
  padding: 0.6rem 2rem;
  transition: all 0.2s ease 0s;
  text-transform: ${(props) => (props.upper ? 'uppercase' : 'initial')};
  font-weight: ${(props) => (props.upper ? '500' : '400')};
  svg {
    margin-right: 1rem;
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.lightGrey};
    pointer-events: none;
  }
  text-align: center;
`;

export default Button;
