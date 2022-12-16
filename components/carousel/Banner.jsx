import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import bannerType from "../../types/bannerType";
import { storageUrl } from "../../helpers/url";

const BannerWrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 50rem;
  @media ${props => props.theme.devices.laptopM} {
    height: 35rem;
  }
  @media ${props => props.theme.devices.tabletL} {
    height: initial;
  }
`;

const BannerImagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  /* object-fit: cover; */
  @media ${props => props.theme.devices.tabletL} {
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

const Banner = ({ banner, mostrarFolhas }) => {
  return (
    <>
      {banner.link.indexOf("http") == -1 ? (
        <Link href={banner ? banner.link : "/"}>
          <BannerWrapper>
            {!!banner && (
              <Fade>
                <picture>
                  {banner.images.map(({ path, type, max_width }) => (
                    <source
                      media={max_width ? `(max-width: ${max_width}px)` : ""}
                      type={`image/${type}`}
                      srcSet={`${storageUrl()}${path}`}
                      key={path}
                    />
                  ))}
                  <BannerImagem alt={banner.titulo} />
                </picture>
              </Fade>
            )}
            {banner.folhas ? (
              <>
                {!!mostrarFolhas && (
                  <Fade>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/static/img/folha-1.webp"
                      />
                      <source
                        type="image/png"
                        srcSet="/static/img/folha-1.png"
                      />
                      <Folha alt="Folha" className="folha-1" />
                    </picture>
                  </Fade>
                )}
                {!!mostrarFolhas && (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/static/img/folha-2.webp"
                    />
                    <source type="image/png" srcSet="/static/img/folha-2.png" />
                    <Folha alt="Folha" className="folha-2" />
                  </picture>
                )}
              </>
            ) : null}
          </BannerWrapper>
        </Link>
      ) : (
        <a href={banner ? banner.link : "/"} target="_blank">
          <BannerWrapper>
            {!!banner && (
              <Fade>
                <picture>
                  {banner.images.map(({ path, type, max_width }) => (
                    <source
                      media={max_width ? `(max-width: ${max_width}px)` : ""}
                      type={`image/${type}`}
                      srcSet={`${storageUrl()}${path}`}
                      key={path}
                    />
                  ))}
                  <BannerImagem alt={banner.titulo} />
                </picture>
              </Fade>
            )}
            {banner.folhas ? (
              <>
                {!!mostrarFolhas && (
                  <Fade>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/static/img/folha-1.webp"
                      />
                      <source
                        type="image/png"
                        srcSet="/static/img/folha-1.png"
                      />
                      <Folha alt="Folha" className="folha-1" />
                    </picture>
                  </Fade>
                )}
                {!!mostrarFolhas && (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/static/img/folha-2.webp"
                    />
                    <source type="image/png" srcSet="/static/img/folha-2.png" />
                    <Folha alt="Folha" className="folha-2" />
                  </picture>
                )}
              </>
            ) : null}
          </BannerWrapper>
        </a>
      )}
    </>
  );
};

Banner.propTypes = {
  banner: bannerType,
  mostrarFolhas: PropTypes.bool
};

Banner.defaultProps = {
  banner: null,
  mostrarFolhas: false
};

export default Banner;
