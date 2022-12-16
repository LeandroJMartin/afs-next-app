import styled from "styled-components";
import Head from "next/head";
import BannerSimples from "../components/layout/BannerSimples";
import Container from "../components/ui/containers/Container";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import Formulario from "../components/formulario/Formulario";
import TitleUpper from "../components/ui/tipografia/TitleUpper";

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

const FaleConosco = () => {
  const assuntos = [
    "SAC",
    "Trabalhe conosco",
    "Fornecedores",
    "Assessoria de Imprensa"
  ];

  return (
    <Page>
      <Head>
        <title>Armazém Fit Store - Fale Conosco</title>
        <meta
          name="description"
          key="description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Armazém Fit Store - Fale Conosco"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
      </Head>
      <BannerSimples bannerId="fale-conosco" mostrarFolhas />
      <Container>
        <FaleConoscoTitle corCliente="verdeFolha">
          Fale Conosco
        </FaleConoscoTitle>
        <Paragrafo>
          Para dúvidas ou mais informações, entre em contato conosco.
        </Paragrafo>
        <FormularioWrapper>
          <Formulario assuntos={assuntos} type="contato" />
        </FormularioWrapper>
      </Container>
      <FaixaCadastro />
    </Page>
  );
};

export default FaleConosco;
