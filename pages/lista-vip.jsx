import styled from "styled-components";
import Head from "next/head";
import BannerSimples from "../components/layout/BannerSimples";
import Container from "../components/ui/containers/Container";
import FormularioVip from "../components/vip/FormularioVip";
import TitleUpper from "../components/ui/tipografia/TitleUpper";
import PropTypes from "prop-types";

const Page = styled.div``;

const ListaVipTitle = styled(TitleUpper)`
  margin-top: 4rem;
  text-align: start;
  max-width: 60rem;
  width: 100%;
  line-height: 1.1;
`;

const Paragrafo = styled.p`
  margin-bottom: 4rem;
  font-size: 1.8rem;
  max-width: 40rem;
  width: 100%;
`;

const ParagrafoUpper = styled(Paragrafo)`
  margin: 2rem 0;
  text-transform: uppercase;
`;

const FormularioWrapper = styled.div`
  margin-bottom: 8rem;
`;

const ListaVip = () => (
  <Page>
    <Head>
      <title>Armazém Fit Store - Faça parte da Lista VIP</title>
      <meta
        name="description"
        key="description"
        content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
      />
      <meta
        property="og:title"
        key="og:title"
        content="Armazém Fit Store - Faça parte da Lista VIP"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
      />
    </Head>
    <BannerSimples bannerId="lista-vip" mostrarFolhas />
    <Container>
      <ListaVipTitle corCliente="verdeFolha">
        Faça parte da Lista VIP Armazém Fit Store E receba ofertas e promoções
        exclusivas para você!{" "}
      </ListaVipTitle>
      <Paragrafo>
        E quem estiver na lista VIP receberá as ofertas em primeira mão e vai
        aproveitar o estoque cheio!
      </Paragrafo>
      <FormularioWrapper>
        <FormularioVip />
      </FormularioWrapper>
    </Container>
  </Page>
);

export default ListaVip;
