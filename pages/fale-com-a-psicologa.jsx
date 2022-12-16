import styled from "styled-components";
import Head from "next/head";
import BannerSimples from "../components/layout/BannerSimples";
import Container from "../components/ui/containers/Container";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import FormularioSetembroAmarelo from "../components/formulario/FormularioSetembroAmarelo";
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FalePsicologa = () => {
  return (
    <Page>
      <Head>
        <title>Armazém Fit Store - Fale com a Psicóloga</title>
        <meta
          name="description"
          key="description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Armazém Fit Store - Fale com a Psicóloga"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Encontre a Armazém Fit Store mais próxima. Endereço da sede: Av. Francisco das Chagas Oliveira, 1230, São José do Rio Preto - SP. Telefone: (17) 4141-3262."
        />
      </Head>
      <BannerSimples bannerId="psicologa" />
      <Container>
        <FaleConoscoTitle corCliente="verdeFolha">
          Fale com a Psicóloga
        </FaleConoscoTitle>
        <Paragrafo>
          Como está a sua saúde emocional e mental? Em setembro, participe do
          aconselhamento terapêutico do Armazém Fit Store, em parceria com a
          psicóloga Daniela Lopes [CRP: 06/143489]!
        </Paragrafo>
        <Paragrafo>
          Um espaço que tem como foco promover o seu bem-estar, aliviar as
          crises do dia a dia e te ajudar a passar pelo momento de incertezas
          que a pandemia nos trouxe.
        </Paragrafo>
        <Paragrafo>
          Fique à vontade para escrever sua mensagem ou dúvida, que a Dani irá
          te responder no seu e-mail de cadastro!
        </Paragrafo>
        <FormularioWrapper>
          <FormularioSetembroAmarelo />
        </FormularioWrapper>
      </Container>
      <FaixaCadastro />
    </Page>
  );
};

export default FalePsicologa;
