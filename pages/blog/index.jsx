/* eslint-disable no-param-reassign */
import styled from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import postType from "../../types/postType";
import BannerSimples from "../../components/layout/BannerSimples";
import Title from "../../components/ui/tipografia/TitleUpper";
import Container from "../../components/ui/containers/Container";
import ListaPosts from "../../components/posts/ListaPosts";
import FaixaCadastro from "../../components/vip/FaixaCadastro";
import Button from "../../components/ui/buttons/Button";

const Page = styled.div``;

const TitleTopo = styled(Title)`
  text-align: left;
`;

const Listas = styled.div`
  .lista-wrapper {
    margin-top: 6rem;
    &:not(:first-of-type) {
      margin-top: 8rem;
      padding-top: 8rem;
      border-top: 1px solid ${props => props.theme.colors.lightGrey};
    }
    @media ${props => props.theme.devices.tabletL} {
      &,
      &:not(:first-of-type) {
        margin-top: 2rem;
        padding-top: 2rem;
      }
    }
  }
`;

const ListaPostsFull = styled(ListaPosts)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  grid-gap: 1rem;
  justify-items: flex-start;
  li {
    margin-top: 2rem;
  }
`;

const Final = styled.div`
  text-align: center;
  margin: 4rem 0;
  p {
    color: ${props => props.theme.client.colors.verdeEscuro};
  }
  ${Button} {
    margin-top: 2rem;
    display: inline-block;
  }
`;

const Blog = ({ categorias }) => (
  <Page>
    <Head>
      <title>Blog da Armazém Fit Store - Dicas, receitas e muito mais!</title>
      <meta
        name="description"
        key="description"
        content="Venha descobrir a vida saudável com nossas dicas de exercícios, receitas saudáveis e reflexões sobre a sua saúde mental. Tudo isso e muito mais no Blog da AFS!"
      />
      <meta
        property="og:title"
        key="og:title"
        content="Blog da Armazém Fit Store - Dicas, receitas e muito mais!"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Venha descobrir a vida saudável com nossas dicas de exercícios, receitas saudáveis e reflexões sobre a sua saúde mental. Tudo isso e muito mais no Blog da AFS!"
      />
    </Head>
    <BannerSimples bannerId="blog" mostrarFolhas />
    <Container>
      <Listas>
        {Object.keys(categorias).map(categoria => (
          <div key={categoria} className="lista-wrapper">
            <TitleTopo corCliente="verdeClaro">{categoria}</TitleTopo>
            <ListaPostsFull posts={categorias[categoria]} overFlowScroll />
          </div>
        ))}
      </Listas>
    </Container>
    <Final>
      <p>Consulte disponibilidade na loja mais próxima</p>
      <Link href="/compre-online" passHref>
        <Button as="a" title="Compre Online" corCliente="verdeFolha" upper>
          Compre Online
        </Button>
      </Link>
    </Final>
    <FaixaCadastro />
  </Page>
);

export const getStaticProps = async () => {
         const { posts } = await (await fetch(
           `${process.env.API_URL}/api/posts`
         )).json();

         // agrupando posts por categoria
         const categorias = posts.reduce((total, post) => {
           const [tagPrincipal] = post.tags;
           if (!total[tagPrincipal]) {
             total[tagPrincipal] = [];
           }
           total[tagPrincipal].push(post);
           return total;
         }, {});

         return {
           props: {
             categorias,
             posts
           }
         };
       };

Blog.propTypes = {
  categorias: PropTypes.objectOf(PropTypes.arrayOf(postType)).isRequired
};

export default Blog;
