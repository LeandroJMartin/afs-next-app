import styled from 'styled-components';
import { useAmp } from 'next/amp';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import Menu from './Menu';
import Icon from '../../ui/icons/Icon';
import Logo from '../Logo';

const LogoNav = styled(Logo)`
  width: 20rem;

  @media(max-width: 1075px) {
    width: 8rem;
    margin-right: 2rem;
  }

  @media(max-width: 980px) {
    width: 20rem;
    margin-right: 0;
  }

  @media(max-width: 600px) {
    width: 10rem;
    margin-right: 0;
  }
`;

const NavStyled = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 1rem;
`;

const MenuToggle = styled.button`
  border: none;
  background: none;
  outline: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 1rem;
`;

const IconMenu = styled(Icon)`
  width: 2rem;
  height: 2rem;
  fill: ${(props) => props.theme.client.colors.verdeFolha};
  @media (min-width: 981px) {
    display: none;
  }
`;

const Navbar = ({ className }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const isAmp = useAmp();

  useEffect(() => {
    // identifica se sera necessario abrir a nav por padrao -- users vindo das AMPs
    const urlParams = new URLSearchParams(window.location.search);
    const openNav = urlParams.get('on');
    if (openNav) {
      setMenuAberto(true);
    }

    const handleRouteChange = () => {
      setMenuAberto(false);
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <NavStyled className={className}>
      <Link href="/">
        <a title="Início">
          <LogoNav />
        </a>
      </Link>
      <Menu fechar={() => setMenuAberto(false)} visivel={menuAberto} />
      {!isAmp ? (
        <MenuToggle aria-label="Abrir menu" onClick={() => setMenuAberto(true)}>
          <IconMenu icon={menuAberto ? 'close' : 'menu'} tipo="svg" />
        </MenuToggle>
      ) : (
        <a href="?on=1" title="Abrir menu">
          <MenuToggle aria-label="Abrir menu">
            <IconMenu icon="menu" tipo="svg" />
          </MenuToggle>
        </a>
      )}
    </NavStyled>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: '',
};

export default Navbar;
