import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import Container from "../ui/containers/Container";
import ListaOfertas from "./ListaOfertas";
import Button from "../ui/buttons/Button";
import ofertaType from "../../types/ofertaType";
import TitleUpper from "../ui/tipografia/TitleUpper";

const ListaOfertasFull = styled(ListaOfertas)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 30rem));
  margin: 3rem 0;
  li {
    margin-top: 4rem;
  }
  @media ${(props) => props.theme.devices.tablet} {
    grid-template-columns: initial;
    grid-auto-flow: column;
    margin: 2rem auto;
    min-width: calc(100vw - 2rem);
    li {
      margin: 0 1rem;
    }
  }
  @media ${(props) => props.theme.devices.mobileS} {
    li {
      min-width: 26rem;
    }
  }
`;

const OfertasFaixaStyled = styled.div`
  background: ${(props) => props.theme.client.colors.verdeEscuro};
  padding: 4rem 1rem;
  .texto-aviso {
    color: white;
    margin: 1rem auto;
    text-align: center;
  }
  .calls {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      margin: 0 2rem;
    }
  }
  @media (min-width: 676px) {
    ul {
      margin: 2rem 0;
    }
  }
`;

const OfertasFaixa = ({ ofertas }) => (
  <OfertasFaixaStyled>
    <Container>
      <TitleUpper color="white" as="h2">
        Produtos em destaque
      </TitleUpper>
      <ListaOfertasFull overFlowScroll ofertas={ofertas} />
      <p className="texto-aviso">
        *Consulte disponibilidade na unidade mais próxima.
      </p>
      <div className="calls">
        <Link href="/ofertas" passHref>
          <Button
            title="Ver todas as ofertas"
            as="a"
            corCliente="verdeClaro"
            upper
          >
            Ver todas as ofertas
          </Button>
        </Link>
        <Link href="/compre-online" passHref>
          <Button title="Compre Online" as="a" corCliente="verdeClaro" upper>
            Compre Online
          </Button>
        </Link>
      </div>
    </Container>
  </OfertasFaixaStyled>
);

OfertasFaixa.propTypes = {
  ofertas: PropTypes.arrayOf(ofertaType),
};

OfertasFaixa.defaultProps = {
  ofertas: [],
};

export default OfertasFaixa;
