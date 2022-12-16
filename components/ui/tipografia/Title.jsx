import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => (props.corCliente
    ? props.theme.client.colors[props.corCliente]
    : props.theme.colors.black)};

  margin: 0;
  line-height: 1.5;
`;

export default Title;
