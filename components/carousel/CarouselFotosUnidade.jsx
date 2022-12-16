import styled from "styled-components";

import React from "react";

import { Carousel } from "react-responsive-carousel";

const ContainerCarousel = styled.div``;

const CarouselFotosUnidade = ({ fotos }) => (
  <ContainerCarousel>
    <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      stopOnHover={true}
      showIndicators={true}
    >
      {fotos.map(item => (
        <div>
          <img src={`${item.url}`} />
        </div>
      ))}
    </Carousel>
  </ContainerCarousel>
);

export default CarouselFotosUnidade;
