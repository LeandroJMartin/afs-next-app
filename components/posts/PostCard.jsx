import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import postType from '../../types/postType';
import Button from '../ui/buttons/Button';
import { storageUrl } from '../../helpers/url';

const Card = styled.a`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20rem 1fr;
  grid-row-gap: 1.5rem;
  align-content: center;
  max-width: 30rem;
  margin: 0 auto;
`;

const ThumbWrapper = styled.div`
  position: relative;
`;

const Thumb = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  object-fit: cover;
  object-position: top;
  border-radius: 2.5rem;
  box-shadow: ${(props) => props.theme.boxShadows.stronger};
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  .tag {
    display: block;
    text-transform: uppercase;
    color: ${(props) => props.theme.client.colors.verdeClaro};
  }
  .titulo {
    font-size: 2rem;
    line-height: 1.1;
    margin: 0.5rem 0 1.5rem;
    font-weight: normal;
    color: ${(props) => props.theme.client.colors.verdeEscuro};
  }
`;

const Post = ({
  post: {
    titulo, thumbs, tags, path: post_path,
  },
}) => {
  const [primeiraTag] = tags;
  return (
    <Link href={`/blog/${post_path}`} passHref>
      <Card title={titulo}>
        <ThumbWrapper>
          <picture>
            {thumbs.map(({ path, type }) => (
              <source
                type={`image/${type}`}
                srcSet={`${storageUrl()}${path}`}
                key={path}
              />
            ))}
            <Thumb alt={titulo} />
          </picture>
        </ThumbWrapper>
        <Content>
          <span className="tag">{primeiraTag}</span>
          <h3 className="titulo">{titulo}</h3>
          <Button corCliente="verdeEscuro" upper>
            Leia mais
          </Button>
        </Content>
      </Card>
    </Link>
  );
};

Post.propTypes = {
  post: postType.isRequired,
};

export default Post;
