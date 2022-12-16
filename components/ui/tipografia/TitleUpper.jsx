import styled from 'styled-components';

const TitleUpper = styled.h1`
  font-size: 2.6rem;
  color: ${(props) => (props.corCliente
    ? props.theme.client.colors[props.corCliente]
    : props.color || props.theme.colors.black)};
  text-transform: uppercase;
  text-align: center;
`;

export default TitleUpper;
