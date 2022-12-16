import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import PropTypes from "prop-types";
import Container from "../components/ui/containers/Container";
import TitleUpper from "../components/ui/tipografia/TitleUpper";
import Carousel from "../components/carousel/Carousel";
import OfertasFaixa from "../components/ofertas/OfertasFaixa";
import { getAbsoluteUrl } from "../helpers/url";
import ofertaType from "../types/ofertaType";
import postType from "../types/postType";
import bannerType from "../types/bannerType";
import ListaPosts from "../components/posts/ListaPosts";
import FaixaExpansao from "../components/calls/FaixaExpansao";
import BuscarCompleto from "../components/lojas/BuscarCompleto";
import Video from "../components/videos/Video";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import ListaNoticias from "../components/layout/Noticias";
import Button from "../components/ui/buttons/Button";
import Link from "next/link";

const PostsHome = styled.div`
  padding: 4rem 0;
`;

const CtaLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const VideosHome = styled.div`
  padding: 6rem 0 4rem;
  .videos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    justify-items: center;
  }
  .titulo {
    text-transform: uppercase;
    color: ${props => props.theme.client.colors.verdeClaro};
    font-size: 2.3rem;
    font-weight: normal;
  }
  @media ${props => props.theme.devices.tablet} {
    padding: 8rem 0 4rem;
  }
`;

const Page = styled.div``;

const Home = ({ ofertas, posts, banners }) => (
  <Page>
    <Carousel banners={banners} showDots={true} />
    <Container>
      <BuscarCompleto />
    </Container>
    {!!ofertas.length && <OfertasFaixa ofertas={ofertas} />}
    {!!posts.length && (
      <PostsHome>
        <Container>
          <TitleUpper as="h2" corCliente="verdeFolha">
            Blog
          </TitleUpper>
          <ListaPosts posts={posts} overFlowScroll />
          <br />
          <br />

          <TitleUpper as="h2" corCliente="verdeFolha">
            Armazém na Mídia
          </TitleUpper>
          <ListaNoticias />

          <CtaLinkWrapper>
            <Link href="/noticias">
              <Button upper corCliente="verdeEscuro">
                Ver Mais
              </Button>
            </Link>
          </CtaLinkWrapper>
        </Container>
      </PostsHome>
    )}
    <FaixaExpansao />
    <VideosHome>
      <Container>
        <ul className="videos">
          <li className="video-wrapper">
            <Video
              placeholderImgName="depoimento-clientes"
              vimeoId="360287971"
              title="O que dizem nossos clientes"
            />
            <h3 className="titulo">O que dizem nossos clientes</h3>
          </li>
          <li className="video-wrapper">
            <Video
              placeholderImgName="depoimento-franqueado"
              vimeoId="360284283"
              title="O que dizem nossos franqueados"
            />
            <h3 className="titulo">O que dizem nossos franqueados</h3>
          </li>
        </ul>
      </Container>
    </VideosHome>
    <FaixaCadastro />
  </Page>
);

export const getStaticProps = async () => {
  const [{ ofertas }, { posts }, { banners }] = await Promise.all([
    await (await fetch(`${process.env.API_URL}/api/ofertas?limit=3`)).json(),
    await (await fetch(`${process.env.API_URL}/api/posts?limit=3`)).json(),
    await (await fetch(`${process.env.API_URL}/api/banners?limit=2`)).json()
  ]);

  return {
    props: {
      ofertas,
      posts,
      banners
    }
  };
};

Home.propTypes = {
  ofertas: PropTypes.arrayOf(ofertaType),
  posts: PropTypes.arrayOf(postType),
  banners: PropTypes.arrayOf(bannerType)
};

Home.defaultProps = {
  ofertas: [],
  posts: [],
  banners: []
};

export default Home;
