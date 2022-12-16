import App from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import TagManager from "react-gtm-module";
import Layout from "../components/layout/Layout";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import NProgress from "../components/layout/NProgress";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CustomApp extends App {
  componentDidMount() {
    TagManager.initialize({
      gtmId: "GTM-W3JK925"
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Armazém Fit Store, seu jeito saudável de viver!</title>
          <meta
            name="keywords"
            content="armazém fit store, afs, alimentação saudável, produtos orgânicos, vegana, vegetariana, produtos saudáveis"
          />
          <meta
            name="description"
            key="description"
            content="Encontre alimentação saudável na AFS! Produtos orgânicos, sem lactose, sem glúten, zero açúcar, veganos, vegetarianos, low carb, suplementação esportiva e muito mais!"
          />
          <meta name="robots" key="robots" content="index, follow" />
          <meta name="rating" key="ratings" content="general" />
          <meta property="og:type" key="og:type" content="website" />
          {/* <meta
            property="og:image"
            content="https://oralsystem.com.br/static/img/oralsystem-og.jpg"
          /> */}
          <meta
            property="og:url"
            key="og:type"
            content="https://armazemfitstore.com.br"
          />
          <meta
            property="og:title"
            key="og:title"
            content="Armazém Fit Store, seu jeito saudável de viver!"
          />
          <meta
            property="og:description"
            key="og:description"
            content="Encontre alimentação saudável na AFS! Produtos orgânicos, sem lactose, sem glúten, zero açúcar, veganos, vegetarianos, low carb, suplementação esportiva e muito mais!  "
          />
          <link
            href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicon-16x16.png"
            sizes="16x16"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Layout>
              <NProgress />
              <Component {...pageProps} />
            </Layout>
          </>
        </ThemeProvider>
      </>
    );
  }
}
