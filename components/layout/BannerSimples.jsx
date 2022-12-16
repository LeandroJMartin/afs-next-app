import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const BannerWrapper = styled.div`
  position: relative;
  height: 50rem;
  @media ${(props) => props.theme.devices.laptopM} {
    height: 45rem;
  }
  @media ${(props) => props.theme.devices.tabletL} {
    height: initial;
  }
`;

const BannerImagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${(props) => props.theme.devices.tabletL} {
    position: relative;
    height: initial;
  }
`;

const Folha = styled.img`
  position: absolute;
  max-width: 26rem;
  z-index: 2;
  &.folha-1 {
    bottom: 0;
  }
  &.folha-2 {
    top: 0;
    right: 0;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Banner = ({ bannerId, mostrarFolhas }) => (
  <BannerWrapper>
    <picture>
      <source
        media="(max-width: 799px)"
        type="image/webp"
        srcSet={`/static/img/banners-paginas/${bannerId}-600.webp`}
      />
      <source
        media="(max-width: 799px)"
        srcSet={`/static/img/banners-paginas/${bannerId}-600.jpg`}
      />
      <source
        type="image/webp"
        srcSet={`/static/img/banners-paginas/${bannerId}.webp`}
      />
      <BannerImagem
        src={`/static/img/banners-paginas/${bannerId}.jpg`}
        alt=""
      />
    </picture>
    {!!mostrarFolhas && (
      <Fade>
        <picture>
          <source type="image/webp" srcSet="/static/img/folha-1.webp" />
          <source type="image/png" srcSet="/static/img/folha-1.png" />
          <Folha alt="Folha" className="folha-1" />
        </picture>
      </Fade>
    )}
    {!!mostrarFolhas && (
      <picture>
        <source type="image/webp" srcSet="/static/img/folha-2.webp" />
        <source type="image/png" srcSet="/static/img/folha-2.png" />
        <Folha alt="Folha" className="folha-2" />
      </picture>
    )}
  </BannerWrapper>
);

Banner.propTypes = {
  bannerId: PropTypes.string.isRequired,
  mostrarFolhas: PropTypes.bool,
};

Banner.defaultProps = {
  mostrarFolhas: false,
};

export default Banner;
