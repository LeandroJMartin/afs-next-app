import styled, { css } from "styled-components";

const Noticias = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 675px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    margin-right: -1rem;
    margin-left: 1rem;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
    padding: 2rem;
    img {
      min-width: 25rem;
    }
  }
`;

const ContainerImgNoticia = styled.div``;
const ImgNoticia = styled.img``;

const ListaNoticias = () => (
  <Noticias>
    <ContainerImgNoticia>
      <a
        href="https://revistapegn.globo.com/Franquias/noticia/2020/05/rede-de-alimentacao-saudavel-lanca-vending-machines-mirando-cenario-pos-coronavirus.html"
        target="_blank"
      >
        <picture>
          <source
            type="image/webp"
            srcSet="/static/img/noticias/noticia1.webp"
          />
          <ImgNoticia
            src="/static/img/noticias/noticia1.png"
            alt="Armazém Fit Store"
          />
        </picture>
      </a>
    </ContainerImgNoticia>
    <ContainerImgNoticia>
      <a
        href="https://www.jornaldocomercio.com/_conteudo/ge/noticias/2019/08/696102-busca-pela-vida-saudavel-estimula-o-mercado-fitness.html"
        target="_blank"
      >
        <picture>
          <source
            type="image/webp"
            srcSet="/static/img/noticias/noticia2.webp"
          />
          <ImgNoticia
            src="/static/img/noticias/noticia2.png"
            alt="Armazém Fit Store"
          />
        </picture>
      </a>
    </ContainerImgNoticia>
    <ContainerImgNoticia>
      <a
        href="https://www.terra.com.br/noticias/dino/mercado-de-franquias-cresce-e-saude-ganha-destaque-no-setor,3c2f55e4d840b9248d30a6e916849e13clyhpzdm.html"
        target="_blank"
      >
        <picture>
          <source
            type="image/webp"
            srcSet="/static/img/noticias/noticia3.webp"
          />
          <ImgNoticia
            src="/static/img/noticias/noticia3.png"
            alt="Armazém Fit Store"
          />
        </picture>
      </a>
    </ContainerImgNoticia>
    <ContainerImgNoticia>
      <a
        href="https://br.noticias.yahoo.com/amigas-franquia-produtos-saudaveis-150133291.html"
        target="_blank"
      >
        <picture>
          <source
            type="image/webp"
            srcSet="/static/img/noticias/noticia4.webp"
          />
          <ImgNoticia
            src="/static/img/noticias/noticia4.png"
            alt="Armazém Fit Store"
          />
        </picture>
      </a>
    </ContainerImgNoticia>
  </Noticias>
);

export default ListaNoticias;
