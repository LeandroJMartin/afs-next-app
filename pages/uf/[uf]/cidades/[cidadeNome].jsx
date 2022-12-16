import styled from 'styled-components';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { lojaLinkType } from '../../../../types/lojaType';
import BannerSimples from '../../../../components/layout/BannerSimples';
import Container from '../../../../components/ui/containers/Container';
import ListaLojas from '../../../../components/lojas/ListaLojas';
import { getAbsoluteUrl } from '../../../../helpers/url';
import TitleUpper from '../../../../components/ui/tipografia/TitleUpper';

const Page = styled.div`
  ${TitleUpper} {
    margin: 2rem auto 1rem;
  }
`;

const LojasUfCidade = ({ lojas, uf, cidadeNome }) => (
  <Page>
    <Head>
      <title>Armazém Fit Store - Encontre a loja mais próxima!</title>
      <meta
        name="description"
        key="description"
        content="A AFS está em mais de 50 cidades do Brasil. Encontre a loja mais próxima e conheça nossas ofertas. Conte com a Armazém Fit Store para somar ao seu jeito saudável de viver!"
      />
      <meta
        property="og:title"
        key="og:title"
        content="Armazém Fit Store - Encontre a loja mais próxima!"
      />
      <meta
        property="og:description"
        key="og:description"
        content="A AFS está em mais de 50 cidades do Brasil. Encontre a loja mais próxima e conheça nossas ofertas. Conte com a Armazém Fit Store para somar ao seu jeito saudável de viver!"
      />
    </Head>
    <BannerSimples bannerId="lojas" mostrarFolhas />
    <Container>
      <TitleUpper corCliente="verdeClaro">{`Lojas Armazém Fit Store em ${cidadeNome}/${uf}`}</TitleUpper>
      <ListaLojas lojasLinks={lojas} />
    </Container>
  </Page>
);

LojasUfCidade.getInitialProps = async ({
  req: { headers } = {},
  query: { uf, cidadeNome },
}) => {
  try {
    const { lojas } = await (await fetch(
      `${getAbsoluteUrl(headers)}/api/estado/${uf}/cidades/${cidadeNome}`,
    )).json();
    return { lojas, uf, cidadeNome };
  } catch (error) {
    console.error(error);
    return { lojas: [], uf, cidadeNome };
  }
};

LojasUfCidade.propTypes = {
  lojas: PropTypes.arrayOf(lojaLinkType).isRequired,
  uf: PropTypes.string.isRequired,
  cidadeNome: PropTypes.string.isRequired,
};

export default LojasUfCidade;
