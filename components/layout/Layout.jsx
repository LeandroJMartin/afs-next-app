import styled from "styled-components";
import { useAmp } from "next/amp";
import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutStyled = styled.div`
  /* padding-top: 10rem;
  @media ${props => props.theme.devices.tabletL} {
    padding-top: 7rem;
  } */
`;

const NavbarFixed = styled(Navbar)`
  position: relative;
  background: white;
  max-height: 7rem;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 3;
  padding: 1rem;
  @media ${props => props.theme.devices.tabletL} {
    background: none;
    height: initial;
    padding: 1rem 3rem 0;
    position: fixed;
    justify-content: space-between;
  }
`;

const Content = styled.main``;

const Layout = ({ children }) => {
  const isAmp = useAmp();

  return (
    <LayoutStyled className="layout">
      {!!isAmp && (
        <>
          <Head>
            <script
              async
              custom-element="amp-analytics"
              src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
            />
          </Head>
          <amp-analytics
            config="https://www.googletagmanager.com/amp.json?id=GTM-WRMZ3WM&gtm.url=SOURCE_URL"
            data-credentials="include"
          />
        </>
      )}
      <NavbarFixed />
      <Content>{children}</Content>
      <Footer />
    </LayoutStyled>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
