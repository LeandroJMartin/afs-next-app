import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconSVG = styled.svg`
  width: ${(props) => props.tamanho};
  height: ${(props) => props.tamanho};
  fill: ${(props) => props.cor};
`;

const IconImage = styled.div`
  width: ${(props) => props.tamanho};
  height: ${(props) => props.tamanho};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }
`;

const Icon = ({
  tamanho, cor, icon, tipo, className, alt,
}) => (tipo && tipo === 'svg' ? (
  <IconSVG tamanho={tamanho} cor={cor} className={className}>
    <use xlinkHref={`/static/icons/icomoon/symbol-defs.svg#icon-${icon}`} />
  </IconSVG>
) : (
  <IconImage className={className} tamanho={tamanho}>
    <picture>
      <source
        type="image/webp"
        srcSet={`/static/icons/custom/${icon}.webp`}
      />
      <img src={`/static/icons/custom/${icon}.png`} alt={alt} />
    </picture>
  </IconImage>
));

Icon.propTypes = {
  tamanho: PropTypes.string,
  cor: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['svg', 'image']).isRequired,
  alt: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  cor: '#000',
  alt: '',
  tamanho: '4rem',
};

export default Icon;
