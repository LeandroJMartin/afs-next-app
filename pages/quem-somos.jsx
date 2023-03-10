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
      <title>Conhe??a a Armaz??m Fit Store - Seu jeito saud??vel de viver!</title>
      <meta
        name="description"
        key="description"
        content="Com mais de 50 lojas em funcionamento, somos uma das maiores redes de produtos naturais do Brasil. O prop??sito da AFS ?? ajudar pessoas a terem uma vida saud??vel."
      />
      <meta
        property="og:title"
        key="og:title"
        content="Conhe??a a Armaz??m Fit Store - Seu jeito saud??vel de viver!"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Com mais de 50 lojas em funcionamento, somos uma das maiores redes de produtos naturais do Brasil. O prop??sito da AFS ?? ajudar pessoas a terem uma vida saud??vel."
      />
    </Head>
    <BannerSimples bannerId="quem-somos" mostrarFolhas />
    <Container>
      {/* <Topo>
        <h2>Armaz??m Fit Store</h2>
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
                alt="Mais de 950 marcas fornecedoras em todo o pa??s"
              />
            </picture>
            <p>marcas fornecedoras em todo o pa??s</p>
          </li>
        </ul>
      </Topo> */}
      <Conteudo>
        <div className="secao-dividida">
          <div className="texto-wrapper">
            <p>
            Foi no ano de 2017, com o prop??sito de levar alimenta????o saud??vel ao maior n??mero de pessoas, que o Armaz??m nasceu.
            </p>
            <p>
            Atrav??s de uma necessidade, surgiu a oportunidade. Isso porque n??s, fundadoras, sentimos na pele a import??ncia de viver uma vida saud??vel. Ambas enfrent??vamos problemas de sa??de, para os quais a alimenta????o saud??vel foi essencial na evolu????o dos tratamentos.
            </p>
            <p>
            Morando no interior do Esp??rito Santo, nem sempre foi f??cil para n??s manter esse estilo de vida saud??vel. N??o encontr??vamos muitos produtos e alimentos no mercado local, e isso fez com que despertasse em n??s uma ideia poderia atender ??s nossas necessidades e ??s de outras pessoas como n??s, que buscavam formas de se alimentar bem e de forma prazerosa!
            </p>
            <p>
            Nossa maior preocupa????o sempre foi fazer com que os clientes que entrassem em nossas lojas se sentissem ???em casa??? e encontrassem um mix de produtos capaz de suprir todas as suas necessidades.
            </p>
          </div>
        </div>
        <div className="secao">
          <div className="texto-wrapper">
          E foi pensando nisso que abrimos nossa loja com produtos a granel. O cliente escolhe o que quer levar, na quantidade que quiser. Assim, al??m de n??o promover o desperd??cio, ele leva pra casa produtos frescos e naturais.
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
              alt="Fundadora Armaz??m Fit Store"
            />
          </picture>
          <div className="texto-wrapper">
            <p>
            Tudo que fizemos, e ainda fazemos, ?? com esse mesmo pensamento: observando as necessidades e transformando-as em solu????es.
            </p>
            <p>
            A partir da nossa primeira loja. surgiu a oportunidade de franquearmos a marca. E foi a?? que nosso prop??sito se intensificou, pois j?? n??o estar??amos s?? levando sa??de ao maior n??mero de pessoas da nossa cidade, mas tamb??m do nosso pa??s!
            </p>
            <p>
            Hoje, somos mais de 100 unidades em todo o Brasil, estamos presentes em 19 Estados e no Distrito Federal, e nos enche de alegria poder contar essa hist??ria e saber que de algo t??o negativo em um primeiro momento, como os nossos problemas de sa??de, nasceu algo t??o lindo e cheio de prop??sito positivo, que ?? a rede Armaz??m Fit Store!
            </p>
            <picture>
            <source
              type="image/webp"
              srcSet="/static/img/quem-somos/assinaturas.webp"
            />
            <img
              src="/static/img/quem-somos/assinaturas.png"
              alt="Fundadora Armaz??m Fit Store"
            />
          </picture>
            {/* <p>Ayla Quintella e Tathiana Gava</p>
            <p>S??cias-Fundadoras Armaz??m Fit Store</p> */}
          </div>
        </div>

        <div className="secao-dividida">
          <div className="texto-wrapper">
            <h2>A franquia Armaz??m Fit Store</h2>
            <p>
            Assim como nossos produtos saud??veis, os modelos de neg??cio Armaz??m Fit Store tamb??m s??o personalizados. As franquias Armaz??m Fit Store oferecem 5 formatos, clique nas setas da imagem ao lado e conhe??a todos os nossos modelos!
            </p>
            <LinkSejaFranqueado
              title="Seja Franqueado(a) do Armaz??m Fit Store"
              href="https://franquiaprodutosnaturais.com.br/?origem=Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seja Franqueado(a) do Armaz??m Fit Store
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
