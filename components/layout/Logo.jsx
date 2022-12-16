import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoImage = styled.img``;

const Logo = ({ className }) => (
  <picture>
    <source
      type="image/webp"
      media="(max-width: 600px)"
      srcSet="/static/img/logo-afs-100.webp"
    />
    <source
      type="image/png"
      media="(max-width: 600px)"
      srcSet="/static/img/logo-afs-100.png"
    />
    <source
      type="image/webp"
      media="(min-width: 601px)"
      srcSet="/static/img/logo-afs.webp"
    />
    <source
      type="image/png"
      media="(min-width: 601px)"
      srcSet="/static/img/logo-afs.png"
    />
    <LogoImage className={className} alt="Armazém Fit Store" />
  </picture>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
