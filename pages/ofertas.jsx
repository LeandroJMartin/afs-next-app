import styled from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import BannerSimples from "../components/layout/BannerSimples";
import ofertaType from "../types/ofertaType";
import { getAbsoluteUrl } from "../helpers/url";
import Title from "../components/ui/tipografia/TitleUpper";
import Container from "../components/ui/containers/Container";
import ListaOfertas from "../components/ofertas/ListaOfertas";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import Button from "../components/ui/buttons/Button";

const Page = styled.div``;

const TitleTopo = styled(Title)`
  margin-top: 3rem;
`;

const ListaOfertasFull = styled(ListaOfertas)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 30rem));
  margin: 3rem 0;
  li {
    margin-top: 4rem;
  }
`;

const Final = styled.div`
  text-align: center;
  margin: 4rem 0;
  p {
    color: ${(props) => props.theme.client.colors.verdeEscuro};
  }
  ${Button} {
    margin-top: 2rem;
    display: inline-block;
  }
`;

const Ofertas = ({ ofertas }) => (
  <Page>
    <Head>
      <title>Armazém Fit Store - Produtos em destaque</title>
      <meta
        name="description"
        key="description"
        content="Produtos naturais e por um preço saudável. Confira os Produtos em destaque disponíveis. Consulte a disponibilidade na loja mais próxima ou compre online!"
      />
      <meta
        property="og:title"
        key="og:title"
        content="Armazém Fit Store - Produtos em destaque"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Produtos naturais e por um preço saudável. Confira os Produtos em destaque disponíveis. Consulte a disponibilidade na loja mais próxima ou compre online!"
      />
    </Head>
    <BannerSimples bannerId="ofertas" mostrarFolhas />
    <Container>
      <TitleTopo corCliente="verdeClaro">
        Produtos em destaque Armazém Fit Store
      </TitleTopo>
      <ListaOfertasFull ofertas={ofertas} />
    </Container>
    <Final>
      <p>Consulte disponibilidade na loja mais próxima</p>
      <Link href="/compre-online" passHref>
        <Button as="a" title="Compre Online" corCliente="verdeFolha" upper>
          Compre Online
        </Button>
      </Link>
    </Final>
    <FaixaCadastro />
  </Page>
);

// Ofertas.getInitialProps = async ({ req: { headers } = {} }) => {
//   const { ofertas } = await (await fetch(
//     `${getAbsoluteUrl(headers)}/api/ofertas`,
//   )).json();

//   return { ofertas };
// };

export const getStaticProps = async () => {
  const { ofertas } = await (
    await fetch(`${process.env.API_URL}/api/ofertas`)
  ).json();

  return {
    props: {
      ofertas,
    },
  };
};

Ofertas.propTypes = {
  ofertas: PropTypes.arrayOf(ofertaType),
};

Ofertas.defaultProps = {
  ofertas: [],
};

export default Ofertas;
