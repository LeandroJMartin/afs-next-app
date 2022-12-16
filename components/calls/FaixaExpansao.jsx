import styled from 'styled-components';
import Link from 'next/link';
import Button from '../ui/buttons/Button';
import Container from '../ui/containers/Container';

const Faixa = styled.a`
  display: block;
  position: relative;
`;

const FaixaFundo = styled.div`
  background: ${(props) => props.theme.client.colors.verdeEscuro};
  height: 14rem;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
  transform: translateY(-50%);
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.client.colors.verdeFolha};
  background-image: url('/static/img/fundo-leve-afs.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: ${(props) => props.theme.boxShadows.stronger};
  color: white;
  padding: 3.5rem 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
  .content {
    max-width: 40rem;
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-weight: normal;
      font-size: 2.4rem;
      line-height: 1.1;
    }
    p {
      margin: 1.5rem 0;
    }
    ${Button} {
      background: white;
      margin: 0 auto;
      color: ${(props) => props.theme.client.colors.verdeEscuro};
    }
  }
  .produtos {
    position: absolute;
    right: 5rem;
    bottom: -5rem;
    max-width: 23rem;
  }
  @media ${(props) => props.theme.devices.tablet} {
    .produtos {
      max-width: 10rem;
      right: -1rem;
      bottom: -5rem;
    }
  }
`;

const FaixaExpansao = () => (
  <Faixa
    href="https://franquiaprodutosnaturais.com.br/"
    title="Leve o Armazém Fit Store para sua cidade!"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaixaFundo />
    <Container>
      <Card>
        <div className="content">
          <h2>Leve o Armazém Fit Store para sua cidade!</h2>
          <p>
            Seja um franqueado e leve a alimentação saudável até mais perto de
            você. Conheça as vantagens de um dos mercados que mais crescem no
            Brasil!
          </p>
          <Button upper>Quero saber mais</Button>
        </div>
        <picture>
          <source
            type="image/webp"
            srcSet="/static/img/produtos-leve-afs.webp"
          />
          <source type="image/png" srcSet="/static/img/produtos-leve-afs.png" />
          <img alt="Produtos Armazém Fit Store" className="produtos" />
        </picture>
      </Card>
    </Container>
  </Faixa>
);

export default FaixaExpansao;
