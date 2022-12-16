import styled from "styled-components";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import postType from "../../types/postType";
import { getAbsoluteUrl, storageUrl } from "../../helpers/url";
import Container from "../../components/ui/containers/Container";
import { sortImages } from "../../helpers/images";
import ListaPosts from "../../components/posts/ListaPosts";
import FaixaCadastro from "../../components/vip/FaixaCadastro";

const Page = styled.div`
  padding: 20rem 0 5rem;
  @media ${props => props.theme.devices.tabletL} {
    padding: 10rem 0 4rem;
  }
`;

const PostImageWrapper = styled.div`
  position: relative;
  height: 40rem;
  overflow: hidden;
  border-radius: 5px;
  max-width: 80rem;
  margin: 1rem auto;
  @media ${props => props.theme.devices.tablet} {
    height: 24rem;
  }
  &::after {
    content: "";
    position: absolute;
    height: 2.5rem;
    bottom: 0;
    width: 100%;
    background: ${props => props.theme.client.colors.verdeFolha};
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;

const PostTop = styled.div`
  text-align: center;
  margin-top: 3rem;
  h2 {
    color: ${props => props.theme.client.colors.verdeClaro};
    font-weight: normal;
    font-size: 3rem;
  }
  .data {
    text-transform: uppercase;
    color: ${props => props.theme.client.colors.verdeEscuro};
  }
`;

const PostContent = styled.div`
  max-width: 80rem;
  margin: 3rem auto;
  p {
    margin: 2rem 0;
    @media ${props => props.theme.devices.tablet} {
      text-align: justify;
    }
  }
  a {
    font-weight: bold;
    color: #76b08c;
  }
  ul {
    margin-top: 1rem;
    list-style: disc;
  }
`;

const PostsRelacionadosWrapper = styled.div`
  margin-top: 6rem;
  padding: 6rem 0 6rem;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  h3 {
    color: ${props => props.theme.client.colors.verdeFolha};
  }
`;

const Post = ({
  post: { image_hero, corpo_html, titulo, date },
  postsRelacionados
}) => (
  <Page>
    <Head>
      <title>{`${titulo} | Blog da Armazém Fit Store`}</title>
      <meta name="description" key="description" content={titulo} />
      <meta
        property="og:title"
        key="og:title"
        content={`${titulo} | Blog da Armazém Fit Store`}
      />
      <meta property="og:description" key="og:description" content={titulo} />
    </Head>
    <Container>
      <PostImageWrapper>
        <picture>
          {image_hero.map(({ path, type, max_width }) => (
            <source
              media={max_width ? `(max-width: ${max_width}px)` : ""}
              type={`image/${type}`}
              srcSet={`${storageUrl()}${path}`}
              key={path}
            />
          ))}
          <img alt="" />
        </picture>
      </PostImageWrapper>
      <PostTop>
        <h2>{titulo}</h2>
        <span className="data">
          {format(new Date(date), "dd 'de' MMMM 'de' yyyy", {
            locale: ptBR
          })}
        </span>
      </PostTop>
      <PostContent dangerouslySetInnerHTML={{ __html: corpo_html }} />
      <PostsRelacionadosWrapper>
        <h3>Posts relacionados</h3>
        <ListaPosts posts={postsRelacionados} overFlowScroll />
      </PostsRelacionadosWrapper>
    </Container>
    <FaixaCadastro />
  </Page>
);

Post.propTypes = {
  post: postType.isRequired,
  postsRelacionados: PropTypes.arrayOf(postType)
};

Post.defaultProps = {
  postsRelacionados: []
};

export const getStaticPaths = async () => {
  const { posts } = await (await fetch(
    `${process.env.API_URL}/api/posts`
  )).json();

  const paths = posts.map(({ path: postPath }) => ({
    params: { postPath }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({
  req: { headers } = {},
  params: { postPath }
}) => {
  const { post, postsRelacionados } = await (await fetch(
    `${getAbsoluteUrl(headers)}/api/posts/${postPath}`
  )).json();

  // ordenando as imagens
  post.image_hero = sortImages(post.image_hero);

  return { props: { post, postsRelacionados } };
};

export default Post;
