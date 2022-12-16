/* eslint-disable consistent-return */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../ui/icons/Icon";
import Video from "../videos/Video";

const Foto = styled.img`
  display: ${props => props.show};
  border-radius: 3.5rem;
  width: 50rem;
  height: 33rem;
  box-shadow: ${props => props.theme.boxShadows.stronger};
  @media (max-width: 500px) {
    width: 30rem;
    height: 20rem;
  }
`;

const FotosWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const ControllButton = styled.button`
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  background-color: transparent;
  border: 0.4rem solid lightgray;
  width: 5rem;
  height: 5rem;
  box-shadow: ${props => props.theme.boxShadows.stronger};
  transition: all 0.2s;
  z-index: 1;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const VideoWrapper = styled.div`
  display: ${props => props.show};
  width: 50rem;
  height: 33rem;
  @media (max-width: 500px) {
    width: 30rem;
    height: 20rem;
  }
`;

const TextWrapper = styled.div`
  display: ${props => props.show};
  position: absolute;
  bottom: 0;
  padding-bottom: 0;
  width: 100%;
  flex-direction: column;
  align-items: center;
  h2,
  p {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.8rem;
  }
  h2 {
    margin-bottom: -2rem;
  }
  p {
    max-width: 35rem;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
    p,
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
`;

export default function Slider({ fotos, type }) {
  const [controle, setControle] = useState({
    size: fotos.length,
    photoActive: 1
  });

  function nextPhoto() {
    if (controle.photoActive === controle.size) {
      setControle({
        ...controle,
        photoActive: 1
      });

      return true;
    }

    setControle({
      ...controle,
      photoActive: controle.photoActive + 1
    });
  }

  function prevPhoto() {
    if (controle.photoActive === 1) {
      setControle({
        ...controle,
        photoActive: controle.size
      });

      return true;
    }

    setControle({
      ...controle,
      photoActive: controle.photoActive - 1
    });
  }

  return (
    <FotosWrapper>
      <ControllButton
        top="45%"
        left="1.5rem"
        onClick={() => prevPhoto()}
        aria-label="Foto Anterior"
      >
        <Icon tipo="svg" tamanho="4rem" icon="arrow_left" cor="#fff" />
      </ControllButton>
      {fotos.map(item => (
        <div key={item.id}>
          {item.type === "foto" && (
            <>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/static/img/${item.image}.webp`}
                />
                <Foto
                  src={`/static/img/${item.image}.png`}
                  alt=""
                  show={item.id === controle.photoActive ? "block" : "none"}
                />
              </picture>
              <TextWrapper
                show={item.id === controle.photoActive ? "flex" : "none"}
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </TextWrapper>
            </>
          )}
          {item.type === "video" && (
            <VideoWrapper
              key={item.id}
              show={item.id === controle.photoActive ? "block" : "none"}
            >
              <Video
                placeholderImgName={item.thumb}
                vimeoId={item.videoId}
                title={item.alt}
              />
            </VideoWrapper>
          )}
        </div>
      ))}
      <ControllButton
        top="45%"
        right="1.5rem"
        onClick={() => nextPhoto()}
        aria-label="Próxima Foto"
      >
        <Icon tipo="svg" tamanho="4rem" icon="arrow_right" cor="#fff" />
      </ControllButton>
    </FotosWrapper>
  );
}

Slider.propTypes = {
  fotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  type: PropTypes.string.isRequired
};
