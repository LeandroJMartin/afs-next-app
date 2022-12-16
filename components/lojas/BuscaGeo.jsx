import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../ui/buttons/ButtonSucesso';
import Icon from '../ui/icons/Icon';
import CircleLoading from '../ui/loadings/Circle';

const GEO_KEY = 'AIzaSyDPo1rgn1qidv801MOtTL6Qdf_zqpKhCiM';

const ButtonGeo = styled(Button)`
  font-size: 1.5rem;
  padding: 0.5rem;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;

// navigator.geolocation || "geolocation" in navigator

const BuscaGeo = ({ setCidade, carregado, setErroCidadeGeo }) => {
  const [status, setStatus] = useState('idle');

  const transformaCoordenadas = async ({ latitude, longitude }) => {
    setStatus('convertendo');
    try {
      if (latitude && longitude) {
        const { results } = await (await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=administrative_area_level_2&key=${GEO_KEY}`,
        )).json();
        if (results && results.length) {
          // o primeiro resultado eh o mais certeiro
          const [{ formatted_address }] = results;
          // como o result_type foi especificado, o formatted_address comeca com cidade
          const [cidade] = formatted_address.split('-');
          // enviando cidade para cima
          setCidade(cidade.trim());
        }
      }
      setStatus('obtido');
    } catch (error) {
      setErroCidadeGeo(true);
    }
  };

  const pegarLocalizacao = async () => {
    if ('geolocation' in navigator) {
      setStatus('geolocalizando');
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          if (position && position.coords) {
            transformaCoordenadas(position.coords);
          }
        });
      } catch (error) {
        setErroCidadeGeo(true);
      }
    } else {
      setErroCidadeGeo(true);
    }
  };

  return (
    <ButtonGeo disabled={!carregado} onClick={pegarLocalizacao}>
      {status === 'geolocalizando' || status === 'convertendo' ? (
        <CircleLoading tamanho="1.8" cor="#fff" />
      ) : (
        <Icon tipo="svg" icon="location" tamanho="1.8rem" cor="#fff" />
      )}
      {carregado ? 'Usar minha localização' : 'Carregando...'}
    </ButtonGeo>
  );
};

BuscaGeo.propTypes = {
  setCidade: PropTypes.func.isRequired,
  setErroCidadeGeo: PropTypes.func.isRequired,
  carregado: PropTypes.bool.isRequired,
};

export default BuscaGeo;
