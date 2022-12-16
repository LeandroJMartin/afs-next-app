import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../ui/containers/Container';
import { enderecoType } from '../../types/lojaType';

const MAPS_KEY = 'AIzaSyBDY34jWOjtYIUTKy9e03AkJmsdy38s4hc';
const MAP_MARKER_URL = 'https://afs-next.p9armazem-team.now.sh/static/img/favicon-32x32.png';

const MapaWrapperStyled = styled.div`
  margin: 3rem auto 0;
  text-align: center;
  position: relative;
  .fundo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 110%;
    height: 110%;
    background-image: ${(props) => `url("${props.fundoUrl}")`};
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.2);
    z-index: -1;
  }
  img,
  iframe {
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadows.normal};
    cursor: pointer;
    max-width: 100%;
    margin: 3rem auto;
  }
`;

const MapaWrapper = ({ children, fundoUrl }) => (
  <MapaWrapperStyled fundoUrl={fundoUrl}>
    <div className="fundo" />
    <Container>{children}</Container>
  </MapaWrapperStyled>
);

const MapaLoja = ({
  tipo,
  endereco: {
    logradouro, bairro, cidade, uf,
  },
  trocarTipo,
}) => {
  const enderecoCompleto = `${logradouro},${bairro},${cidade},${uf}`;
  const viewWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const zoom = viewWidth >= 1000 ? 17 : 19;
  const staticImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${enderecoCompleto}&zoom=${zoom}&size=600x360&markers=anchor:center|icon:${MAP_MARKER_URL}|${enderecoCompleto}&key=${MAPS_KEY}`;

  switch (tipo) {
    case 'static': {
      return (
        <MapaWrapper fundoUrl={staticImageUrl}>
          <img
            onClick={() => trocarTipo('embed')}
            src={staticImageUrl}
            alt="Mapa Armazém Fit Store"
            width="600"
            height="340"
            loading="lazy"
          />
        </MapaWrapper>
      );
    }

    case 'embed':
      return (
        <MapaWrapper>
          <iframe
            width="600"
            height="360"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}
    &q=Armazém Fit Store,${enderecoCompleto}`}
            title="Mapa Armazém Fit Store"
          />
        </MapaWrapper>
      );

    default:
      return null;
  }
};

MapaWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  fundoUrl: PropTypes.string,
};

MapaWrapper.defaultProps = {
  fundoUrl: '/static/img/map-fundo-default.png',
};

MapaLoja.propTypes = {
  tipo: PropTypes.oneOf(['', 'static', 'embed']).isRequired,
  endereco: enderecoType.isRequired,
  trocarTipo: PropTypes.func,
};

MapaLoja.defaultProps = {
  trocarTipo: null,
};

export default MapaLoja;
