import styled from "styled-components";

export const InputGroup = styled.div`
  .select-input {
    border: none;
    border-radius: 10px;
    background-color: #fff;
    height: 4.5rem;
    padding-left: 1rem;
    :disabled {
      cursor: not-allowed;
    }
    &--cinza {
      width: 100%;
      background-color: ${props => props.theme.colors.moreLessLighterGrey};
      border: 0.5px solid ${props => props.theme.colors.lightGrey};
    }
    &--textarea {
      resize: none;
      height: 15rem;
      padding-top: 1rem;
    }
    &--tiny {
      min-width: 10rem;
    }
    &--medium {
    }
    &--erro {
      box-shadow: 0px 0px 3px 2px red;
    }
  }

  .select-input-imovel {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.moreLessLighterGrey};
    border: 0.5px solid ${props => props.theme.colors.lightGrey};
    height: 4.5rem;
    padding-left: 1rem;

    @media (max-width: 900px) {
      margin-bottom: 1.5rem;
    }

    :disabled {
      cursor: not-allowed;
    }

    &--large {
      width: 80rem;

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    &--textarea {
      resize: none;
      height: 10rem;
      padding-top: 1rem;
    }

    &--tiny {
      width: 25rem;

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    &--medium {
      width: 50rem;

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    &--erro {
      box-shadow: 0px 0px 3px 2px red;
    }
  }
`;

export const SelectGroup = styled(InputGroup)``;

export const TextAreaGroup = styled(InputGroup)``;
