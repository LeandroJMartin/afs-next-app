/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '../ui/buttons/Button';
import BuscaCampos from './BuscaCampos';

const FaixaBuscarStyled = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${(props) => props.theme.client.colors.verdeClaro};
  h2 {
    font-weight: normal;
    color: inherit;
  }
  .ou {
    text-transform: uppercase;
    display: block;
    margin: 1rem;
    color: inherit;
    font-size: 1.7rem;
  }
  .encontre-online {
    color: inherit;
    font-size: 1.8rem;
    ${Button} {
      margin: 1rem auto;
    }
  }
`;

const FaixaBuscar = ({ className }) => (
  <FaixaBuscarStyled className={className}>
    <h2>
      Encontre o <strong>Armazém Fit Store</strong> mais perto de você!{' '}
    </h2>
    <BuscaCampos />
    <span className="ou">Ou</span>
    <p className="encontre-online">
      Encontre a loja virtual da unidade mais próxima e faça sua compra sem sair
      de casa!
      <Link href="/compre-online">
        <a title="Compre Online">
          <Button upper corCliente="verdeEscuro">
            Compre Online
          </Button>
        </a>
      </Link>
    </p>
  </FaixaBuscarStyled>
);

FaixaBuscar.propTypes = {
  className: PropTypes.string,
};

FaixaBuscar.defaultProps = {
  className: '',
};

export default FaixaBuscar;
