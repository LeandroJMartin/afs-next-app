import styled from 'styled-components';

export const FormPlaceholder = styled.div`
  height: 500px;
  width: 340px;
  border-radius: 1.5rem;
  background-color: #f0f0f0;
  box-shadow: ${(props) => props.theme.boxShadows.normal};

  @media (max-width: 400px) {
    width: 100%;
  }
`;
