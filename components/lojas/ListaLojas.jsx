import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import LojaCard from './LojaCard';
import { lojaLinkType } from '../../types/lojaType';

const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
  grid-gap: 2rem;
  text-align: center;
  justify-content: center;
  margin: 2rem 0;
  li {
  }
  ${(props) => props.overFlowScroll
    && css`
      @media (max-width: 675px) {
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        margin-right: -1rem;
        margin-left: 1rem;
        scroll-snap-type: x mandatory;
        justify-content: flex-start;
        padding: 2rem;
        li {
          min-width: 30rem;
        }
      }
    `}
`;

const ListaPosts = ({
  lojasLinks, className, overFlowScroll, modo,
}) => (
  <Lista className={className} overFlowScroll={overFlowScroll}>
    {lojasLinks.map((lojaLink) => (
      <li key={lojaLink._id}>
        <Fade>
          <LojaCard lojaLink={lojaLink} modo={modo} />
        </Fade>
      </li>
    ))}
  </Lista>
);

ListaPosts.propTypes = {
  lojasLinks: PropTypes.arrayOf(lojaLinkType),
  className: PropTypes.string,
  overFlowScroll: PropTypes.bool,
  modo: PropTypes.oneOf(['balcao', 'hotsite']),
};

ListaPosts.defaultProps = {
  lojasLinks: [],
  className: '',
  overFlowScroll: false,
  modo: 'hotsite',
};

export default ListaPosts;
