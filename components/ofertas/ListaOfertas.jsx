import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ofertaType from '../../types/ofertaType';
import OfertaCard from './OfertaCard';
import OfertaBannerCard from './OfertaBannerCard';

const Lista = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
  li {
    flex: 1;
    margin: 0 1rem;
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

const ListaOfertas = ({ ofertas, className, overFlowScroll }) => (
  <Lista className={className} overFlowScroll={overFlowScroll}>
    {ofertas
      .sort(({ tipo }) => (tipo !== 'banner' ? 1 : -1))
      .map((oferta) => (
        <li key={oferta._id}>
          {oferta.tipo === 'banner' ? (
            <OfertaBannerCard oferta={oferta} />
          ) : (
            <OfertaCard oferta={oferta} />
          )}
        </li>
      ))}
  </Lista>
);

ListaOfertas.propTypes = {
  ofertas: PropTypes.arrayOf(ofertaType),
  className: PropTypes.string,
  overFlowScroll: PropTypes.bool,
};

ListaOfertas.defaultProps = {
  ofertas: [],
  className: '',
  overFlowScroll: false,
};

export default ListaOfertas;
