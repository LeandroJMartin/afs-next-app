/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../ui/buttons/ButtonSucesso";

const ButtonOnline = styled(Button)`
  background: linear-gradient(to bottom, #ed7221, #d26016);
  box-shadow: none;
  margin-left: 6rem;
  @media ${props => props.theme.devices.tabletL} {
    margin: 0;
  }
`;

const MenuLinksStyled = styled.div`
  align-self: stretch;
  display: flex;
  align-items: stretch;
  @media ${props => props.theme.devices.tabletL} {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    left: ${props => (props.visivel ? "0" : "-40%")};
    opacity: ${props => (props.visivel ? "1" : "0")};
    pointer-events: ${props => (props.visivel ? "initial" : "none")};
    transition: left 0.2s linear, opacity 0.275s ease-in-out;
    .gap {
      flex: 1;
    }
  }
`;

const MenuLinksLista = styled.ul`
  align-self: center;
  align-items: center;
  display: flex;
  li {
    margin: 0 0.8rem;
    text-align: center;
    a {
      color: ${props => props.theme.colors.greyDarker};
    }
  }

  .mob-only {
    display: none;
  }

  @media ${props => props.theme.devices.tabletL} {
    width: 60vw;
    padding: 2rem 2rem 0.5rem 4rem;
    box-shadow: -4px 0px 11px 4px rgba(41, 41, 41, 0.2);
    border-left: 1px solid ${props => props.theme.colors.lightGrey};
    background: ${props => props.theme.client.colors.cinza};
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    align-self: stretch;
    margin: 0;
    .mob-only {
      display: initial;
    }
    ${ButtonOnline} {
      margin-top: 2rem;
      padding: 0.8rem;
      margin-left: -0.5rem;
    }
    li {
      margin: 0.6rem;

      a {
        position: relative;
        display: inline-block;
        padding-bottom: 0.5rem;
        color: white;
        &::after {
          content: "";
          height: 2px;
          width: 120%;
          position: absolute;
          bottom: 0rem;
          left: -10%;
          background: ${props => props.theme.client.colors.verdeFolha};
        }
      }
      &:last-of-type a::after {
        background: none;
      }
    }
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
`;

const DropDownWrapper = styled.div`
  background: ${props => props.theme.client.colors.cinza};
  display: ${props => (props.ativo ? "flex" : "none")};
  flex-direction: column;
  position: absolute;

  top: 47px;
  left: -53px;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  width: 180px;

  @media ${props => props.theme.devices.tabletL} {
    display: flex;
    position: relative;
    padding: 0;
    top: 0;
    left: 0;
    width: inherit;
    width: 100%;
    margin-top: -0.8rem;
  }

  li {
    margin: 0.6rem;

    a {
      position: relative;
      display: inline-block;
      padding-bottom: 0.5rem;
      color: white;

      &::after {
        content: "";
        height: 2px;
        width: 120%;
        position: absolute;
        bottom: 0rem;
        left: -10%;
        background: ${props => props.theme.client.colors.verdeFolha};
      }
    }

    &:last-of-type a::after {
      background: none;
    }
  }
`;

const DropDownButton = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* &:hover {
    ${DropDownWrapper} {
      display: flex;
    }
  } */

  @media ${props => props.theme.devices.tabletL} {
    flex-direction: column;
  }
`;

const LinkDropDown = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: "";
    margin-left: 0.5rem;
    width: 0px;
    height: 0px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgb(51, 51, 51);
  }

  @media ${props => props.theme.devices.tabletL} {
    display: none !important;

    &:after {
      content: "";
      margin-left: 0;
      width: 0px;
      height: 0px;
      border: none;
    }
  }
`;

const LinkListaNav = ({ href, title, className }) => (
  <li className={className}>
    <Link href={href}>
      <a title={title}>{title}</a>
    </Link>
  </li>
);

const MenuLinks = ({ visivel, fechar }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown(action) {
    setDropdown(action);
  }

  return (
    <MenuLinksStyled visivel={visivel}>
      <MenuLinksLista>
        <LinkListaNav href="/" className="mob-only" title="Início" />
        <LinkListaNav href="/quem-somos" title="O Armazém" />
        <LinkListaNav href="/ofertas" title="Produtos em destaque" />
        <LinkListaNav href="/blog" title="Blog" />
        <LinkListaNav href="/lojas" title="Lojas" />
        <LinkListaNav href="/lista-vip" title="Lista VIP" />
        <li>
          <a
            title="Seja Franqueado Armazém Fit Store"
            href="https://franquiaprodutosnaturais.com.br/?origem=Site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seja Franqueado
          </a>
        </li>
        <DropDownButton onMouseEnter={() => handleDropdown(true)}>
          <LinkDropDown>Contato</LinkDropDown>
          <DropDownWrapper
            ativo={dropdown}
            onMouseLeave={() => handleDropdown(false)}
          >
            <LinkListaNav href="/fale-conosco" title="Fale Conosco" />
            <LinkListaNav href="/fale-nutri" title="Fale com a Nutri" />
            {/* <LinkListaNav
              href="/fale-com-a-psicologa"
              title="Fale com a Psicóloga"
            /> */}
            <LinkListaNav href="/cadastro-imovel" title="Cadastro de Imóvel" />
            <LinkListaNav href="/cadastro-fornecedor" title="Seja Fornecedor" />
          </DropDownWrapper>
        </DropDownButton>
        <LinkListaNav href="/compre-online" title="Compre Online" />
        <li>
          <Link href="/compre-online">
            <a title="Compre Online">
              <ButtonOnline>Compre Online</ButtonOnline>
            </a>
          </Link>
        </li>
      </MenuLinksLista>
      <div className="gap" onClick={fechar} />
    </MenuLinksStyled>
  );
};

LinkListaNav.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

LinkListaNav.defaultProps = {
  className: ""
};

MenuLinks.propTypes = {
  visivel: PropTypes.bool,
  fechar: PropTypes.func.isRequired
};

MenuLinks.defaultProps = {
  visivel: false
};

export default MenuLinks;
