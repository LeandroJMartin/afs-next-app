import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useAmp } from "next/amp";
import styled from "styled-components";
import Head from "next/head";
import { useState, useEffect } from "react";
import BannerSimples from "../components/layout/BannerSimples";
import { getAbsoluteUrl } from "../helpers/url";
import Container from "../components/ui/containers/Container";
import Icon from "../components/ui/icons/Icon";
import ButtonSucesso from "../components/ui/buttons/ButtonSucesso";
import lojaType from "../types/lojaType";
import Endereco from "../components/lojas/Endereco";
import Telefones from "../components/lojas/Telefones";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import MapaLoja from "../components/lojas/MapaLoja";
import CarouselFotosUnidade from "../components/carousel/CarouselFotosUnidade";

const Page = styled.div``;

const ComprarWrapper = styled.div`
  margin-bottom: 2rem;
  ${ButtonSucesso} {
    background: linear-gradient(to bottom, #ed7221, #d26016);
    display: flex;
    max-width: 19rem;
    justify-content: center;
    @media ${props => props.theme.devices.tablet} {
      margin: 1rem auto 0;
    }
  }
`;

const BreadCrumbs = styled.div`
  margin: 1rem auto 0;
  ul {
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  li {
    display: inline-block;
    position: relative;
    color: ${props => props.theme.client.colors.verdeFolha};
    &:not(:first-of-type) {
      padding-left: 1rem;
      margin-left: 1rem;
      &::before {
        content: "";
        position: absolute;
        height: 50%;
        width: 1.5px;
        background-color: ${props => props.theme.colors.lightGrey};
        left: 0;
        top: 50%;
        transform: translateY(-50%) skew(-20deg);
      }
    }
    @media ${props => props.theme.devices.tablet} {
      color: ${props => props.theme.colors.lessLighterGrey};
    }
    a {
      color: inherit;
    }
  }
`;

const Topo = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  svg {
    fill: ${props => props.theme.client.colors.verdeClaro};
    width: 8rem;
    height: 8rem;
  }
  h2 {
    color: ${props => props.theme.client.colors.verdeClaro};
    font-size: 3.5rem;
  }
  @media ${props => props.theme.devices.tabletL} {
    svg {
      width: 4rem;
      height: 4rem;
    }
    h2 {
      font-size: 2.2rem;
      margin-left: 1rem;
    }
  }
`;

const UnidadeCorpo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  padding: 3rem 0;
  grid-gap: 1rem;
  @media ${props => props.theme.devices.laptop} {
    align-items: center;
    justify-items: center;
  }
`;

const FotoUnidade = styled.img`
  border-radius: 5px;
`;

const InfosUnidade = styled.div`
  font-size: 1.8rem;
  padding: 0 1rem;
  .info {
    font-size: inherit;
    &:not(:first-of-type) {
      margin-top: 1rem;
    }
  }
`;

const IconRedeSocial = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #76b08c;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const ContainerIconTextLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
`;

const TextRedeSocial = styled.a`
  padding-left: 0.5rem;
  font-size: 17px;
`;

const FaixaPecaOnline = styled.div`
  display: flex;
  align-items: center;
  max-width: 84rem;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: 5px;
  background-color: #76b08c21;
  border: 1px solid #76b08c;
  .selo {
    max-width: 7rem;
    margin-right: 2rem;
  }
  .texto {
    strong {
      display: block;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const Loja = ({
  loja: {
    nome: nomeFull,
    endereco,
    telefones,
    status,
    link_balcao_online,
    vendeOnline,
    redes_sociais,
    fotos
  }
}) => {
  const [mostrarMapa, setMostrarMapa] = useState(useAmp() ? "static" : "");

  const lojaInstagram = redes_sociais.instagram.split("/")[3];
  console.log(lojaInstagram);

  const nome = nomeFull
    .replace("AFS", "Armazém Fit Store")
    .replace("-", " ")
    .trim();

  useEffect(() => {
    setTimeout(() => {
      setMostrarMapa("static");
    }, 600);
  }, ["umavez"]);

  const ativa = status === "Em Funcionamento";

  return (
    <Page>
      <Head>
        <title>{`Loja Produtos Naturais Armazém Fit Store ${endereco.cidade}/${endereco.uf}`}</title>
        <meta
          name="description"
          key="description"
          content="Aqui, você encontra uma linha de produtos de alimentação e cosméticos naturais e saudáveis. Low carb, sem glutén, zero açúcar, vegetariano, vegano e muito mais!"
        />
        <meta
          property="og:title"
          key="og:title"
          content={`Loja Produtos Naturais Armazém Fit Store ${endereco.cidade}/${endereco.uf}`}
        />
        <meta
          property="og:description"
          key="og:description"
          content="Aqui, você encontra uma linha de produtos de alimentação e cosméticos naturais e saudáveis. Low carb, sem glutén, zero açúcar, vegetariano, vegano e muito mais!"
        />
      </Head>
      <BannerSimples bannerId="lojas" />
      <Container>
        <Topo>
          <Icon tipo="svg" icon="location" />
          <h2>{`Armazém Fit Store ${nome}/${endereco.uf}`}</h2>
        </Topo>
        {!!endereco && !!endereco.uf && !!endereco.cidade && (
          <BreadCrumbs>
            <ul>
              <li>
                <Link href={`/uf/${endereco.uf}`}>
                  <a title={`Lojas AFS em ${endereco.uf}`}>{endereco.uf}</a>
                </Link>
              </li>
              <li>
                <Link href={`/uf/${endereco.uf}/cidades/${endereco.cidade}`}>
                  <a title={`Lojas AFS em ${endereco.cidade}/${endereco.uf}`}>
                    {endereco.cidade}
                  </a>
                </Link>
              </li>
            </ul>
          </BreadCrumbs>
        )}
        {!!(ativa && vendeOnline) && (
          <FaixaPecaOnline>
            <img
              className="selo"
              src="/static/img/compre-online-selo.png"
              alt="Compre online"
            />
            <p className="texto">
              <strong>Novidade!</strong>
              Peça no delivery e receba o pedido no conforto de sua casa. Peça
              pelo WhatsApp, Balcão Online ou procure-nos nos apps de entregas
              disponíveis em sua cidade 😊
            </p>
          </FaixaPecaOnline>
        )}
        <UnidadeCorpo>
          {fotos ? (
            <CarouselFotosUnidade fotos={fotos} />
          ) : (
            <picture>
              <source type="image/webp" srcSet="/static/img/mocks/loja.webp" />
              <source type="image/jpeg" srcSet="/static/img/mocks/loja.jpg" />
              <FotoUnidade alt="Armazém Fit Store" />
            </picture>
          )}
          <InfosUnidade>
            {!ativa && (<span>Inaugura em breve.</span>)}
            {!!link_balcao_online && ativa && (
              <ComprarWrapper>
                <ButtonSucesso
                  as="a"
                  title="Compre Online"
                  target="_blank"
                  rel="noreferrer noopener"
                  href={link_balcao_online}
                  center
                >
                  <Icon
                    tipo="svg"
                    icon="shopping-cart"
                    tamanho="2rem"
                    cor="#fff"
                  />
                  Compre online
                </ButtonSucesso>
              </ComprarWrapper>
            )}
            {!!endereco && <Endereco endereco={endereco} />}
            {!!telefones.length && ativa && <Telefones telefones={telefones} />}
            {redes_sociais.facebook !== "" ? (
              <IconRedeSocial
                href={redes_sociais.facebook}
                title="Facebook"
                target="_blank"
              >
                <Icon tamanho="2.2rem" cor="#fff" tipo="svg" icon="facebook" />
              </IconRedeSocial>
            ) : (
              ""
            )}
            {redes_sociais.instagram !== "" ? (
              <ContainerIconTextLink>
                <IconRedeSocial
                  href={redes_sociais.instagram}
                  title="Instagram"
                  target="_blank"
                >
                  <Icon
                    tamanho="2.2rem"
                    cor="#fff"
                    tipo="svg"
                    icon="instagram"
                  />
                </IconRedeSocial>
                <TextRedeSocial>@{lojaInstagram}</TextRedeSocial>
              </ContainerIconTextLink>
            ) : (
              ""
            )}
          </InfosUnidade>
        </UnidadeCorpo>
      </Container>
      {!!endereco && !!ativa && (
        <MapaLoja
          tipo='embed'
          trocarTipo={setMostrarMapa}
          endereco={endereco}
        />
      )}
      <FaixaCadastro unidade={nome} />
    </Page>
  );
};

Loja.propTypes = {
  loja: lojaType.isRequired
};

Loja.getInitialProps = async ({
  req: { headers } = {},
  query: { lojaPath }
}) => {
  const { loja } = await (
    await fetch(`${getAbsoluteUrl(headers)}/api/lojas/${lojaPath}`)
  ).json();

  return { loja };
};

export const config = { amp: "hybrid" };

export default Loja;
