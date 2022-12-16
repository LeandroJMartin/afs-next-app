import styled from "styled-components";
import Head from "next/head";
import BannerSimples from "../components/layout/BannerSimples";
import Container from "../components/ui/containers/Container";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import TitleUpper from "../components/ui/tipografia/TitleUpper";
import Button from "../components/ui/buttons/Button";
import Link from "next/link";

import ListaNoticias from "../components/layout/Noticias";

const Page = styled.div``;

const FaleConoscoTitle = styled(TitleUpper)`
  margin-top: 4rem;
  text-align: start;
`;

const Paragrafo = styled.p`
  margin-bottom: 4rem;
`;

const FormularioWrapper = styled.div`
  margin-bottom: 8rem;
`;

const CtaLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const FaleConosco = () => {
  return (
    <Page>
      <Head>
        <title>Armazém Fit Store - Notícias</title>
        <meta
          name="description"
          key="description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Armazém Fit Store - Notícias"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
      </Head>
      <BannerSimples bannerId="afs-na-midia" />
      <Container>
        <FaleConoscoTitle corCliente="verdeFolha">
          Armazém na Mídia
        </FaleConoscoTitle>
        <ListaNoticias />
        <CtaLinkWrapper>
          <Link href="/fale-conosco">
            <Button upper corCliente="verdeEscuro">
              Clique aqui para falar com a nossa Assessoria de Imprensa
            </Button>
          </Link>
        </CtaLinkWrapper>
      </Container>
      <FaixaCadastro />
    </Page>
  );
};

export default FaleConosco;
