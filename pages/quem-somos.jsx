import styled from "styled-components";
import Head from "next/head";
import BannerSimples from "../components/layout/BannerSimples";
import Container from "../components/ui/containers/Container";
import FaixaCadastro from "../components/vip/FaixaCadastro";
import Video from "../components/videos/Video";
import FaixaVersatil from "../components/calls/FaixaVersatil";
import Slider from "../components/layout/Slider";

import { slider1 } from "../helpers/dados";

const Page = styled.div``;

const Topo = styled.div`
  h2 {
    margin-top: 3rem;
    color: ${props => props.theme.client.colors.verdeClaro};
  }
  ul {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
    justify-content: center;
    grid-gap: 1.5rem;
    li {
      display: flex;
      align-items: flex-start;
      p {
        margin-left: 1rem;
        font-size: 1.9rem;
      }
      img {
        min-width: 10rem;
      }
    }
    @media ${props => props.theme.devices.tablet} {
      li {
        align-items: center;
      }
    }
  }
`;

const Conteudo = styled.div`
  & > * {
    margin-top: 1.5rem;
  }
  h2 {
    margin-top: 3rem;
    color: ${props => props.theme.client.colors.verdeClaro};
  }
  .secaoVideo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;  }

  .secao-dividida {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
    align-items: center;
    grid-gap: 2rem;
    @media ${props => props.theme.devices.tablet} {
      justify-items: center;
    }
  }
  .texto-wrapper {
    max-width: 110rem;
  }
  img {
    border-radius: 5px;
  }
  p {
    margin: 2rem 0;
  }
`;

const LinkSejaFranqueado = styled.a`
  padding: 1rem 1.5rem;
  background-color: #69ab3d;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: #fff;
    color: #69ab3d;
    border-color: #69ab3d;
    font-weight: bold;
  }
`;

const Ofertas = () => (
  <Page>
    <Head>
      <title>Conheça a Armazém Fit Store - Seu jeito saudável de viver!</title>
      <meta
        name="description"
        key="description"
        content="Com mais de 50 lojas em funcionamento, somos uma das maiores redes de produtos naturais do Brasil. O propósito da AFS é ajudar pessoas a terem uma vida saudável."
      />
      <meta
        property="og:title"
        key="og:title"
        content="Conheça a Armazém Fit Store - Seu jeito saudável de viver!"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Com mais de 50 lojas em funcionamento, somos uma das maiores redes de produtos naturais do Brasil. O propósito da AFS é ajudar pessoas a terem uma vida saudável."
      />
    </Head>
    <BannerSimples bannerId="quem-somos" mostrarFolhas />
    <Container>
      {/* <Topo>
        <h2>Armazém Fit Store</h2>
        <ul>
          <li>
            <picture>
              <source
                type="image/webp"
                srcSet="/static/img/quem-somos/70unidades.webp"
              />
              <img
                src="/static/img/quem-somos/70unidades.jpg"
                alt="Mais de 70 unidades no Brasil"
              />
            </picture>
            <p>unidades no Brasil</p>
          </li>
          <li>
            <picture>
              <source
                type="image/webp"
                srcSet="/static/img/quem-somos/22milprodutos.webp"
              />
              <img
                src="/static/img/quem-somos/22milprodutos.jpg"
                alt="Mais de 22 mil produtos oferecidos nas lojas"
              />
            </picture>
            <p>produtos oferecidos nas lojas</p>
          </li>
          <li>
            <picture>
              <source
                type="image/webp"
                srcSet="/static/img/quem-somos/950marcas.webp"
              />
              <img
                src="/static/img/quem-somos/950marcas.jpg"
                alt="Mais de 950 marcas fornecedoras em todo o país"
              />
            </picture>
            <p>marcas fornecedoras em todo o país</p>
          </li>
        </ul>
      </Topo> */}
      <Conteudo>
        <div className="secao-dividida">
          <div className="texto-wrapper">
            <p>
            Foi no ano de 2017, com o propósito de levar alimentação saudável ao maior número de pessoas, que o Armazém nasceu.
            </p>
            <p>
            Através de uma necessidade, surgiu a oportunidade. Isso porque nós, fundadoras, sentimos na pele a importância de viver uma vida saudável. Ambas enfrentávamos problemas de saúde, para os quais a alimentação saudável foi essencial na evolução dos tratamentos.
            </p>
            <p>
            Morando no interior do Espírito Santo, nem sempre foi fácil para nós manter esse estilo de vida saudável. Não encontrávamos muitos produtos e alimentos no mercado local, e isso fez com que despertasse em nós uma ideia poderia atender às nossas necessidades e às de outras pessoas como nós, que buscavam formas de se alimentar bem e de forma prazerosa!
            </p>
            <p>
            Nossa maior preocupação sempre foi fazer com que os clientes que entrassem em nossas lojas se sentissem “em casa” e encontrassem um mix de produtos capaz de suprir todas as suas necessidades.
            </p>
          </div>
        </div>
        <div className="secao">
          <div className="texto-wrapper">
          E foi pensando nisso que abrimos nossa loja com produtos a granel. O cliente escolhe o que quer levar, na quantidade que quiser. Assim, além de não promover o desperdício, ele leva pra casa produtos frescos e naturais.
          </div>
        </div>
        <div className="secao-dividida">
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/quem-somos/fundadoras.webp"
            />
            <img
              src="/static/img/quem-somos/fundadoras.jpg"
              alt="Fundadora Armazém Fit Store"
            />
          </picture>
          <div className="texto-wrapper">
            <p>
            Tudo que fizemos, e ainda fazemos, é com esse mesmo pensamento: observando as necessidades e transformando-as em soluções.
            </p>
            <p>
            A partir da nossa primeira loja. surgiu a oportunidade de franquearmos a marca. E foi aí que nosso propósito se intensificou, pois já não estaríamos só levando saúde ao maior número de pessoas da nossa cidade, mas também do nosso país!
            </p>
            <p>
            Hoje, somos mais de 100 unidades em todo o Brasil, estamos presentes em 19 Estados e no Distrito Federal, e nos enche de alegria poder contar essa história e saber que de algo tão negativo em um primeiro momento, como os nossos problemas de saúde, nasceu algo tão lindo e cheio de propósito positivo, que é a rede Armazém Fit Store!
            </p>
            <picture>
            <source
              type="image/webp"
              srcSet="/static/img/quem-somos/assinaturas.webp"
            />
            <img
              src="/static/img/quem-somos/assinaturas.png"
              alt="Fundadora Armazém Fit Store"
            />
          </picture>
            {/* <p>Ayla Quintella e Tathiana Gava</p>
            <p>Sócias-Fundadoras Armazém Fit Store</p> */}
          </div>
        </div>

        <div className="secao-dividida">
          <div className="texto-wrapper">
            <h2>A franquia Armazém Fit Store</h2>
            <p>
            Assim como nossos produtos saudáveis, os modelos de negócio Armazém Fit Store também são personalizados. As franquias Armazém Fit Store oferecem 5 formatos, clique nas setas da imagem ao lado e conheça todos os nossos modelos!
            </p>
            <LinkSejaFranqueado
              title="Seja Franqueado(a) do Armazém Fit Store"
              href="https://franquiaprodutosnaturais.com.br/?origem=Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seja Franqueado(a) do Armazém Fit Store
            </LinkSejaFranqueado>
          </div>
          <div className="franquias">
            <Slider fotos={slider1} type="foto" />
          </div>
        </div>
          <br />
        <div className="secaoVideo">
          <Video
            placeholderImgName="thumb1"
            vimeoId="461166174"
            title="Institucional"
          />
        </div>
      </Conteudo>
      <FaixaVersatil />
    </Container>
    <FaixaCadastro />
  </Page>
);

export default Ofertas;
