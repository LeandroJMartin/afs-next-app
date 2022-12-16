import styled from 'styled-components';
import Button from '../buttons/Button';

export const Form = styled.form`
  width: 400px;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadows.stronger};

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const FormInputs = styled.div`
  margin: 1rem 0;

  input,
  select, textarea {
    margin: 1rem 0;
  }
`;

export const FormButton = styled(Button)`
  background-color: ${(props) => props.theme.client.colors.verdeFolha};

  width: 100%;
  justify-content: center;
  height: 5rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const StatusWrapperImovel = styled.div`
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadows.stronger};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 440px;
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;

  p {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    strong {
      color: ${(props) => props.theme.client.colors.marrom};
    }
  }
`;

export const StatusWrapper = styled(StatusWrapperImovel)`
  max-width: 340px;
  width: 100%;
`;