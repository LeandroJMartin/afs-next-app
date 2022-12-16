import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Vimeo from './Vimeo';

const ThumbWrapper = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 50rem;
  &::after {
    content: '▶';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 5rem;
    transform: translate(-50%, -50%);
    border: 0.5rem solid;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
  }
  &:hover {
    &::after {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      text-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      transform: translate(-50%, -55%) scale(1.03);
    }
  }
`;

const PlaceHolderImagem = styled.img`
  border-radius: 15px;
`;

const Video = ({ placeholderImgName, vimeoId, title }) => {
  const [placeHolderAtivo, setPlaceHolderAtivo] = useState(true);

  if (placeHolderAtivo) {
    return (
      <ThumbWrapper onClick={() => setPlaceHolderAtivo(false)}>
        <picture>
          <source
            type="image/webp"
            srcSet={`/static/img/thumbs-videos/${placeholderImgName}.webp`}
          />
          <PlaceHolderImagem
            src={`/static/img/thumbs-videos/${placeholderImgName}.jpg`}
            alt={title}
            loading="lazy"
          />
        </picture>
      </ThumbWrapper>
    );
  }

  return <Vimeo vimeoId={vimeoId} />;
};

Video.propTypes = {
  placeholderImgName: PropTypes.string.isRequired,
  vimeoId: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Video.defaultProps = {
  title: '',
};

export default Video;
