import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactVimeo from '@u-wave/react-vimeo';

const VideoWrapper = styled.div`
  min-width: 44rem;
  @media (max-width: 500px) {
    min-width: 90vw;
  }
`;

const Vimeo = ({ vimeoId, titulo }) => (
  <VideoWrapper>
    <ReactVimeo
      video={vimeoId}
      className="vimeo-player"
      title={titulo}
      allowFullScreen
      responsive
      autoplay
    />
  </VideoWrapper>
);

Vimeo.propTypes = {
  titulo: PropTypes.string,
  vimeoId: PropTypes.string.isRequired,
};

Vimeo.defaultProps = {
  titulo: '',
};

export default Vimeo;
