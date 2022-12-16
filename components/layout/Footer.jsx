import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Container from "../ui/containers/Container";
import Logo from "./Logo";
import Button from "../ui/buttons/Button";
import Modal from "./Modal";

const ButtonOnline = styled(Button)`
  padding: 0.2rem 0.5rem;
  margin: 0.5rem 0;
  background: ${props => props.theme.client.colors.laranja};
  border-radius: 3px;
  @media ${props => props.theme.devices.tablet} {
    margin: 0.5rem auto;
  }
`;

const FooterStyled = styled.footer`
  margin-top: 3rem;
`;

const FooterInside = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: flex-start;
  justify-items: center;
  grid-gap: 1.5rem;
  @media ${props => props.theme.devices.laptop} {
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  @media ${props => props.theme.devices.tablet} {
    order: 1;
  }
`;

const Lista = styled.ul`
  margin: 0 2rem;
  .titulo {
    color: ${props => props.theme.client.colors.verdeFolha};
  }
`;

const FooterCreditos = styled.div`
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  margin-top: 1rem;
  padding: 1rem;
  text-align: right;
  a {
    color: black;
  }
`;

const LogoContent = styled.div``;
const LogoAbf = styled.img`
  margin-top: 2rem;
  width: 200px;
`;

const LinkListaFooter = ({ href, title }) => (
  <li>
    <Link href={href}>
      <a title={title}>{title}</a>
    </Link>
  </li>
);

const Footer = () => {
  const [modalFidelidadeAberto, setModalFidelidadeAberto] = useState(false);
  const [modalFitCardAberto, setModalFitCardAberto] = useState(false);

  const fechar = () => {
    if (modalFidelidadeAberto) setModalFidelidadeAberto(false);
    if (modalFitCardAberto) setModalFitCardAberto(false);
  };

  return (
    <FooterStyled>
      <Container>
        <FooterInside>
          <LogoWrapper>
            <Link href="/">
              <a title="Início">
                <Logo />
              </a>
            </Link>
          </LogoWrapper>
          <Lista>
            <li>
              <span className="titulo">O Armazém</span>
            </li>
            <LinkListaFooter href="/quem-somos" title="Quem Somos" />
            <LinkListaFooter href="/lojas" title="Onde Estamos" />
            <LinkListaFooter href="/ofertas" title="Produtos em Destaque" />
            <LinkListaFooter href="/blog" title="Blog" />
            <LinkListaFooter href="/noticias" title="Armazém na Mídia" />
          </Lista>
          <Lista>
            <LinkListaFooter href="/fale-conosco" title="Fale Conosco" />
            <LinkListaFooter href="/fale-nutri" title="Fale com a Nutri" />
            {/* <LinkListaFooter
              href="/fale-com-a-psicologa"
              title="Fale com a Psicóloga"
            /> */}
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
            <LinkListaFooter
              href="/cadastro-fornecedor"
              title="Seja Fornecedor"
            />
            <LinkListaFooter
              href="/cadastro-imovel"
              title="Cadastro de Imóvel"
            />
            <LinkListaFooter href="/giftcard" title="Gift Card" />
            {/* <li>
              <a
                href="http://grnarmazenfitstore.nextsoft.com.br/PortalFidelidadeArmazenFitStore/Home/Login"
                title="Consulte seus pontos no Programa de Fidelidade"
                target="_blank"
                rel="noopener noreferrer"
              >
                Programa Fidelidade
              </a>
            </li> */}
          </Lista>
          <Lista>
            {/* <li onClick={() => setModalFidelidadeAberto(true)}>
              Programa Fidelidade
            </li>
            <li onClick={() => setModalFidelidadeAberto(true)}>Fit Card</li> */}
            <li>
              <Link href="/compre-online">
                <a title="Comprar Online">
                  <ButtonOnline>Compre Online</ButtonOnline>
                </a>
              </Link>
            </li>
            <LogoContent>
              <picture>
                <source srcSet="static/img/logo-abf.webp" type="image/webp" />
                <LogoAbf src="static/img/logo-abf.png" />
              </picture>
            </LogoContent>
          </Lista>
        </FooterInside>
        <FooterCreditos>
          <a href="https://p9.digital">Feito com ♥ por P9 Digital</a>
        </FooterCreditos>
      </Container>
      {/* {!!modalFidelidadeAberto && (
        <Modal fechar={fechar}>
          <h2>Programa Fidelidade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            tenetur architecto est dolores ipsum? Consectetur vero reiciendis
            commodi explicabo, sed voluptatibus distinctio, esse excepturi eum
            cupiditate harum expedita fugit quasi!
          </p>
        </Modal>
      )} */}
    </FooterStyled>
  );
};

export default Footer;
