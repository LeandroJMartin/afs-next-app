/* eslint-disable react/jsx-one-expression-per-line */
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/ui/containers/Container";
import Title from "../components/ui/tipografia/Title";

import { InfosIconsGiftCard } from "../helpers/dados";

import FaixaCadastro from "../components/vip/FaixaCadastro";
import AjudaGiftCard from "../components/layout/AjudaGiftCard";

const Page = styled.div`
  .thin {
    font-weight: 300;
    text-transform: uppercase;
  }
  p {
    margin: 2rem auto;
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  height: 30rem;
  @media ${props => props.theme.devices.tabletL} {
    height: initial;
  }
`;

const BannerImagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${props => props.theme.devices.tabletL} {
    position: relative;
    height: initial;
  }
`;

const PageTitle = styled(Title)`
  color: #76b08c;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Introducao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 2rem;
`;

const ButtonIntroducao = styled.a`
  border-radius: 10px;
  text-transform: uppercase;
  background-color: ${props => props.theme.client.colors.verdeSucesso};
  background-image: linear-gradient(to bottom right, #82cc5a, #8bc742);
  color: #fff;
  padding: 1rem 1.5rem;
`;

const ComoComprar = styled.div`
  border-top: 1px solid #e6e6e6;
  margin: 3rem 0;
  padding-top: 2rem;
  text-align: center;
`;

const ContentIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  @media (max-width: 680px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 475px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContentIconWithText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 290px;

  @media (max-width: 475px) {
    height: auto;
    margin-bottom: 3rem;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;

const ContentIconImg = styled.div``;
const IconImg = styled.img`
  width: 110px;
`;

const TitleIcons = styled(Title)`
  color: #76b08c;
  font-size: 20px;
`;

const TextIcon = styled.p`
  margin: 0 !important;
`;

const ComoUtilizar = styled.div`
  background-color: #76b090;
  padding: 4rem 0;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContainerComoUtilizar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ContentImgCartaoUtilizar = styled.div`
  position: absolute;
  right: 5rem;
  @media (max-width: 900px) {
    position: relative;
    right: 0;
  }
`;
const ImgCartaoUtilizar = styled.img`
  width: 400px;
  @media (max-width: 900px) {
    width: 300px;
  }
`;

const ContentTexts = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

const PageTitleWhite = styled(Title)`
  color: #fff;
`;
const TextWhite = styled.p`
  color: #fff;
  max-width: 400px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const Faq = styled.div`
  margin: 3rem 0 5rem;
`;

const CupomPage = () => (
  <Page>
    <Head>
      <title>Gift Card, o cartão presente pré-pago - Armazém Fit Store</title>
      <meta
        name="description"
        key="description"
        content="O Gift Card AFS é um cartão presente pré-pago, cujo valor pode ser trocado por produtos em qualquer loja Armazém Fit Store. Conheça os benefícios!"
      />
      <meta
        property="og:title"
        key="og:title"
        content="Gift Card, o cartão presente pré-pago - Armazém Fit Store"
      />
      <meta
        property="og:description"
        key="og:description"
        content="O Gift Card AFS é um cartão presente pré-pago, cujo valor pode ser trocado por produtos em qualquer loja Armazém Fit Store. Conheça os benefícios!"
      />
    </Head>
    <BannerWrapper>
      <picture>
        <source
          media="(max-width: 900px)"
          type="image/jpeg"
          srcSet="/static/img/giftcard/banner-giftcard-mob.png"
        />
        <source
          media=""
          type="image/jpeg"
          srcSet="/static/img/giftcard/banner-giftcard.png"
        />
        <BannerImagem alt="Ganhe 30% de cashback e concorra a 1 ano de compras!" />
      </picture>
    </BannerWrapper>
    <Container>
      <Introducao>
        <p>
          <PageTitle>O que é?</PageTitle>
        </p>
        <p>
          O Gift Card AFS é um cartão presente pré-pago, cujo valor pode ser
          trocado por produtos em qualquer loja Armazém Fit Store. Perfeito para
          presentear alguém com boa alimentação ou, até mesmo, dar como
          bonificações corporativas!
        </p>
        <ButtonIntroducao
          target="_blank"
          href="https://armazemfitstore.todocartoes.com.br/"
        >
          compre o giftcard!
        </ButtonIntroducao>
      </Introducao>
      <ComoComprar>
        <PageTitle>Como faço para comprar?</PageTitle>
        <ContentIcons>
          <ContentIconWithText>
            <ContentIconImg>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/static/img/giftcard/icon1.webp`}
                />
                <IconImg
                  src={`/static/img/giftcard/icon1.png`}
                  alt="Como Utilizar"
                />
              </picture>
            </ContentIconImg>
            <TitleIcons>Passo 1</TitleIcons>
            <TextIcon>
              Clique em{" "}
              <a
                href="https://armazemfitstore.todocartoes.com.br/"
                target="_blank"
              >
                "comprar"
              </a>
              , aqui nesta página mesmo.
            </TextIcon>
          </ContentIconWithText>
          {InfosIconsGiftCard.map(item => (
            <ContentIconWithText key={item.id}>
              <ContentIconImg>
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`/static/img/giftcard/icon${item.icon}.webp`}
                  />
                  <IconImg
                    src={`/static/img/giftcard/icon${item.icon}.png`}
                    alt="Como Utilizar"
                  />
                </picture>
              </ContentIconImg>
              <TitleIcons>{item.title}</TitleIcons>
              <TextIcon>
                {item.text}
                {item.link == "comprar" ? (
                  <a
                    href="https://armazemfitstore.todocartoes.com.br/"
                    target="_blank"
                  >
                    {item.link}
                  </a>
                ) : (
                  "teste"
                )}
                <strong>{item.textStrong}</strong>
              </TextIcon>
            </ContentIconWithText>
          ))}
        </ContentIcons>
        <PageTitle>
          Pronto! Na mesma hora, você receberá um e-mail com seu Gift Card
          digital!
        </PageTitle>
      </ComoComprar>
    </Container>
    <ComoUtilizar>
      <Container>
        <ContainerComoUtilizar>
          <ContentTexts>
            <PageTitleWhite>Como utilizar?</PageTitleWhite>
            <TextWhite>
              Basta tirar um print do arquivo do Gift Card que será enviado em
              seu e-mail, ou imprimi-lo, e levá-lo até a loja Armazém Fit Store
              mais perto de você para trocar por produtos.
            </TextWhite>
            <ButtonIntroducao
              target="_blank"
              href="https://armazemfitstore.todocartoes.com.br/"
            >
              compre o giftcard!
            </ButtonIntroducao>
          </ContentTexts>
          <ContentImgCartaoUtilizar>
            <picture>
              <source
                type="image/webp"
                srcSet="/static/img/giftcard/cartao-utilizar.webp"
              />
              <ImgCartaoUtilizar
                src="/static/img/giftcard/cartao-utilizar.png"
                alt="Como Utilizar"
              />
            </picture>
          </ContentImgCartaoUtilizar>
        </ContainerComoUtilizar>
      </Container>
    </ComoUtilizar>
    <Faq>
      <Container>
        <PageTitle>FAQ</PageTitle>
        <AjudaGiftCard />
      </Container>
    </Faq>
    <FaixaCadastro />
  </Page>
);

export default CupomPage;
