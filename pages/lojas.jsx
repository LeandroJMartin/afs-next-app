import styled from 'styled-components';
import Head from 'next/head';
import BannerSimples from '../components/layout/BannerSimples';
import Container from '../components/ui/containers/Container';
import BuscarCompleto from '../components/lojas/BuscarCompleto';

const Page = styled.div``;

const Busca = styled(BuscarCompleto)`
  color: ${(props) => props.theme.colors.black};
`;

const Lojas = () => (
  <Page>
    <Head>
      <title>Armazém Fit Store - Encontre a loja mais próxima!</title>
      <meta
        name="description"
        key="description"
        content="A AFS está em mais de 50 cidades do Brasil. Encontre a loja mais próxima e conheça nossas ofertas. Conte com a Armazém Fit Store para somar ao seu jeito saudável de viver! "
      />
      <meta
        property="og:title"
        key="og:title"
        content="Armazém Fit Store - Encontre a loja mais próxima!"
      />
      <meta
        property="og:description"
        key="og:description"
        content="A AFS está em mais de 50 cidades do Brasil. Encontre a loja mais próxima e conheça nossas ofertas. Conte com a Armazém Fit Store para somar ao seu jeito saudável de viver! "
      />
    </Head>
    <BannerSimples bannerId="lojas" mostrarFolhas />
    <Container>
      <Busca />
    </Container>
  </Page>
);

export default Lojas;
