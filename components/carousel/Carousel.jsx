import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import bannerType from "../../types/bannerType";
import Banner from "./Banner";
import Dots from "./Dots";

let timeout;
const INTERVAL_MS = 9000;

const procuraProximoItemId = (itemsIds, itemId) => {
  const indexAtual = itemsIds.indexOf(itemId);
  // retornando o proximo se existir
  return itemsIds[indexAtual + 1] || itemsIds[0];
};

const Carousel = ({ banners, autoPlay, showDots }) => {
  const [{ _id: _idInicial }] = banners;
  const [bannerAtualId, setBannerAtualId] = useState(_idInicial);

  function changeBanner(bannerId) {
    setBannerAtualId(bannerId);
  }

  const bannerAtual = banners.find(({ _id }) => _id === bannerAtualId);
  const trocaBanner = () => {
    const proximoItemId = procuraProximoItemId(
      banners.map(({ _id }) => _id),
      bannerAtualId
    );
    setBannerAtualId(proximoItemId);
  };

  useEffect(() => {
    // usar setInterval aqui pode criar um cache nas variaveis
    if (!autoPlay) return null;
    timeout = setTimeout(() => trocaBanner(), INTERVAL_MS);
    return () => {
      clearTimeout(timeout);
    };
  }, [bannerAtualId]);

  return (
    <div>
      <Banner banner={bannerAtual} mostrarFolhas />
      {showDots ? (
        <Dots
          banners={banners}
          bannerAtualId={bannerAtualId}
          onClick={bannerId => changeBanner(bannerId)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
Carousel.propTypes = {
  banners: PropTypes.arrayOf(bannerType).isRequired,
  autoPlay: PropTypes.bool,
  showDots: PropTypes.bool
};

Carousel.defaultProps = {
  autoPlay: true,
  showDots: false
};

export default Carousel;
