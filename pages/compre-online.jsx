import styled from 'styled-components';
import Head from 'next/head';
import BannerSimples from '../components/layout/BannerSimples';
import Container from '../components/ui/containers/Container';
import BuscaCampos from '../components/lojas/BuscaCampos';

const Page = styled.div``;

const Busca = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${(props) => props.theme.client.colors.verdeClaro};
  h2 {
    font-weight: normal;
    color: inherit;
  }
  color: ${(props) => props.theme.colors.black};
`;

const CompreOnline = () => (
  <Page>
    <Head>
      <title>Armazém Fit Store - Compre Online</title>
      <meta
        name="description"
        key="description"
        content="NA AFS, você compra online! Encontre a loja virtual da Armazém Fit Store mais próxima, e faça sua compra de produtos naturais e saudável sem sair de casa! "
      />
      <meta
        property="og:title"
        key="og:title"
        content="Armazém Fit Store - Compre Online"
      />
      <meta
        property="og:description"
        key="og:description"
        content="NA AFS, você compra online! Encontre a loja virtual da Armazém Fit Store mais próxima, e faça sua compra de produtos naturais e saudável sem sair de casa! "
      />
    </Head>
    <BannerSimples bannerId="compre-online" mostrarFolhas />
    <Container>
      <Busca>
        <h2>
          Encontre a loja virtual mais próxima e faça sua compra sem sair de
          casa!
        </h2>
        <BuscaCampos modo="balcao" />
      </Busca>
    </Container>
  </Page>
);

export default CompreOnline;
