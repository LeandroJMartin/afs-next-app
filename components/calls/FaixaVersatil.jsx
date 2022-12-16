import styled from "styled-components";
import Link from "next/link";
import Button from "../ui/buttons/Button";

const Faixa = styled.a`
  display: block;
  position: relative;
  margin: 3rem auto;
`;

const Card = styled.div`
  background-color: ${props => props.theme.client.colors.verdeFolha};
  background-image: url("/static/img/quem-somos/background-call.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: ${props => props.theme.boxShadows.stronger};
  color: white;
  padding: 3.5rem 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  .content {
    max-width: 40rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    p {
      margin: 1.5rem 0;
      font-size: 2rem;
    }
    &.esquerda {
      text-align: left;
      align-items: flex-start;
    }
    &.direita {
      text-align: right;
      align-items: flex-end;
    }
  }

  @media ${props => props.theme.devices.laptop} {
    background: none;
    box-shadow: none;
    color: ${props => props.theme.client.colors.verdeClaro};
  }
  @media ${props => props.theme.devices.tablet} {
    flex-direction: column;
    .content {
      &.esquerda,
      &.direita {
        align-items: center;
        text-align: center;
      }
      &.esquerda {
        background-color: ${props => props.theme.client.colors.verdeFolha};
        background-image: url("/static/img/fundo-leve-afs.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      &.direita {
        background-color: ${props => props.theme.client.colors.cinza};
      }
      box-shadow: ${props => props.theme.boxShadows.stronger};
      color: white;
      padding: 1.5rem;
      border-radius: 2rem;
      &:not(:first-of-type) {
        margin-top: 2rem;
      }
    }
  }
`;

const FaixaExpansao = () => (
  <Faixa title="Leve o Armazém Fit Store para sua cidade!">
    <Card>
      <div className="content esquerda">
        <p>Encontre a unidade Armazém Fit Store mais próxima de você!</p>
        <Link href="/lojas">
          <Button as="a" corCliente="laranja" upper>
            Encontrar
          </Button>
        </Link>
      </div>
      <div className="content direita">
        <p>Seja um franqueado e leve o Armazém Fit Store para sua cidade!</p>
        <Button
          as="a"
          href="https://franquiaprodutosnaturais.com.br/"
          title="Seja um franqueado"
          target="_blank"
          rel="noopener noreferrer"
          corCliente="laranja"
          upper
        >
          Ver Mais
        </Button>
      </div>
    </Card>
  </Faixa>
);

export default FaixaExpansao;
