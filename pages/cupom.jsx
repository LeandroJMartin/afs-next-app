/* eslint-disable react/jsx-one-expression-per-line */
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/ui/containers/Container";
import Title from "../components/ui/tipografia/Title";
import Button from "../components/ui/buttons/Button";
import { scrollToElement } from "../helpers/window";

const Page = styled.div`
  .thin {
    font-weight: 300;
    text-transform: uppercase;
  }
  p {
    margin: 2rem auto;
  }
`;

const BannerWrapper = styled.div`
  margin-top: 1rem;
  position: relative;
  height: 25rem;
  @media ${(props) => props.theme.devices.tabletL} {
    height: initial;
  }
`;

const BannerImagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${(props) => props.theme.devices.tabletL} {
    position: relative;
    height: initial;
  }
`;

const PageTitle = styled(Title)`
  color: #76b08c;
`;

const Introducao = styled.div``;

const Vantagens = styled.div`
  text-align: center;
  .vantagens {
    background-image: url('/static/img/fundo-vantagens-voucher.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 3rem 0;
    display: grid;
    align-items: center;
    grid-template-columns: 26rem 2rem 26rem 2rem 26rem;
    justify-content: space-between;
    gap: 2rem;
  }
  .vantagem {
    align-self: stretch;
  }
  ${Button} {
    background: #ed7221;
    margin: 3rem auto 2rem;
  }
  @media ${(props) => props.theme.devices.laptop} {
    .vantagens {
      background: none;
      display: flex;
      flex-direction: column;
      max-width: 30rem;
      margin: 0 auto;
      img {
        transform: rotate(90deg);
      }
    }
  }
`;

const Passos = styled.div`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid #e1e1e1;
  padding: 3rem 0;
  margin-top: 8rem;
  img {
    margin-top: -6rem;
  }
  @media ${(props) => props.theme.devices.laptop} {
    flex-direction: column;
    align-items: stretch;
    img {
      margin-top: initial;
      max-width: 25rem;
      margin: 0 auto;
    }
  }
`;

const Cards = styled.div`
  background-image: url('/static/img/fundo-cards-voucher.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 500px));
    justify-content: center;
    gap: 3rem;
    align-items: flex-start;
  }
  a {
    &:first-of-type {
      --color: #ed7221;
    }
    &:nth-of-type(2) {
      --color: #76b08c;
    }
  }
  .card {
    cursor: pointer;
    border-radius: 10px;
    background: white;
    overflow: hidden;
    max-width: 44rem;

    ul {
      li {
        border-bottom: 1px solid #e1e1e1;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        img {
          margin-right: 1rem;
        }
      }
    }
  }
  .titulo {
    max-width: 23rem;
    margin: 3rem auto;
    strong {
      color: var(--color);
      display: flex;
      font-size: 6rem;
      line-height: 0.5;
      span {
        font-size: 3rem;
        align-self: flex-start;
      }
    }
  }
  .comprar {
    padding: 2rem 1rem;
    background: red;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
    background-color: var(--color);
  }
  .detalhe {
    text-align: center;
    margin-top: 2rem;
    a {
      display: inline-block;
      margin-top: 1rem;
      font-weight: bold;
      color: #76b08c;
    }
  }
`;

const CupomPage = () => (
  <Page>
    <Head>
      <title>Cupom de Cr??dito Armaz??m Fit Store</title>
      <meta
        name="description"
        key="description"
        content="Ganhe 30% de cashback e concorra a 1 ano de compras!"
      />
      <meta
        property="og:title"
        key="og:title"
        content="Cupom de Cr??dito Armaz??m Fit Store"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Ganhe 30% de cashback e concorra a 1 ano de compras!"
      />
    </Head>
    <BannerWrapper>
      <picture>
        <source
          media="(max-width: 900px)"
          type="image/jpeg"
          srcSet="/static/img/banner-voucher-mob.jpg"
        />
        <source
          media=""
          type="image/jpeg"
          srcSet="/static/img/banner-voucher.jpg"
        />
        <BannerImagem
          alt="Ganhe 30% de cashback e concorra a 1 ano de compras!"
        />
      </picture>
    </BannerWrapper>
    <Container>
      <Introducao>
        <p>
          <span className="thin">Cupom de cr??dito Armaz??m Fit Store</span>
          <PageTitle>
            Ganhe 30% de cashback e concorra a 1 ano de compras!
          </PageTitle>
          <span className="detalhe">
            *Venda de cupons somente at?? o dia 17/05/2020.
          </span>
        </p>
        <p>
          Para proteger voc??, nossos franqueados e todos os colaboradores da
          rede Armaz??m Fit Store, muitas lojas da rede est??o seguindo a
          recomenda????es de fechamento, em combate ao novo Corona V??rus. Por??m, o
          isolamento social trouxe junto a falta de fluxo de clientes em nossas
          lojas, e fez com que muitas lojas da rede ficassem em uma situa????o
          dif??cil. Por isso, para continuar levando sa??de e produtos de
          qualidade at?? voc??, nossas lojas precisam do seu apoio agora, mais do
          que nunca.
        </p>
        <p>
          Com o intuito de incentivar a economia local e ajudar o m??ximo de
          pessoas poss??veis, a rede Armaz??m Fit Store criou o{" "}
          <strong>CUPOM DE CR??DITO!</strong>
        </p>
        <p>
          <strong>
            Na compra de qualquer um dos nossos dois cupons de cr??dito, voc??:
          </strong>
        </p>
      </Introducao>
      <Vantagens>
        <div className="vantagens">
          <div className="vantagem">
            <h3>GANHA 30% DE CASHBACK</h3>
            para resgatar em produtos a granel na loja quando o per??odo de
            isolamento acabar
          </div>
          <img src="/static/img/divisor1.png" alt="Divisor vantagem" />
          <div className="vantagem">
            <h3>PARTICIPA</h3>
            do sorteio de 1 ANO DE COMPRAS no Armaz??m Fit Store*
          </div>
          <img src="/static/img/divisor2.png" alt="Divisor vantagem" />
          <div className="vantagem">
            <h3>
              AJUDA
            </h3>o Hospital de Amor de Barretos. (A Franqueadora vai doar 5% de
            todo o valor arrecadado).
          </div>
        </div>
        <p>
          *Oferta limitada ??s unidades Armaz??m Fit Store participantes,
          consulte.
        </p>
        <Button onClick={() => scrollToElement(".cards")}>
          Quero meu cupom de cr??dito!
        </Button>
      </Vantagens>

      <Passos>
        <div>
          <span className="thin">PASSO A PASSO</span>
          <PageTitle as="h2">Veja como ?? f??cil participar</PageTitle>
          <ul>
            <li>
              <strong>1.</strong>
              Escolha um dos cupons, no valor de R$ 75 ou R$ 150 e clique em
              COMPRAR CUPOM
            </li>
            <li>
              <strong>2.</strong>
              Escolha a loja desejada para fazer a troca do seu cupom por
              produtos
            </li>
            <li>
              <strong>3.</strong>
              Preencha seus dados corretamente para fazer o pagamento online
            </li>
            <li>
              <strong>4.</strong>
              Pronto! Agora, ?? s?? aguardar o e-mail com o comprovante da sua
              compra!
            </li>
          </ul>
          <p>
            *O e-mail com o comprovante e c??digo do cupom de cr??dito ser??
            enviado para o e-mail cadastrado no momento da compra. Voc?? estar??
            automaticamente participando do sorteio de 1 ano de compras.
          </p>
        </div>
        <img src="/static/img/cupom.png" alt="Cupom de Cr??dito" />
      </Passos>
    </Container>
    <Cards>
      <Container>
        <div className="cards">
          <a
            href="#"
            title="Comprar cupom de cr??dito R$ 75,00"
          >
            <div className="card">
              <div className="titulo">
                <span className="thin">Cupom de</span>
                <strong>
                  <span>R$</span> 75,00
                </strong>
              </div>
              <ul>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  R$ 75,00 para usar na loja escolhida comprando o que quiser
                </li>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  30% de cashback (cr??dito extra no valor de R$ 22,50) para usar
                  em produtos a granel
                </li>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  1 chance para concorrer ao sorteio de 1 ano de compras no
                  valor de R$ 3 mil*
                </li>
              </ul>
              <div className="comprar">
                <span>Promo????o encerrada</span>
              </div>
            </div>
          </a>
          <a
            href="#"
            title="Comprar cupom de cr??dito R$ 150,00"
          >
            <div className="card">
              <div className="titulo">
                <span className="thin">Cupom de</span>
                <strong>
                  <span>R$</span> 150,00
                </strong>
              </div>
              <ul>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  R$ 150,00 para usar na loja escolhida comprando o que quiser
                </li>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  30% de cashback (cr??dito extra no valor de R$ 45,50) para usar
                  em produtos a granel
                </li>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  2 chances para concorrer ao sorteio de 1 ano de compras no
                  valor de R$ 3 mil*
                </li>
                <li>
                  <img
                    src="/static/img/check-cards-voucher.png"
                    alt="??cone vantagem"
                  />
                  B??nus: voc?? ganhar?? um brinde do Armaz??m Fit Store (kit de
                  canudo ecol??gico + escovinha de higieniza????o do canudo)**
                </li>
              </ul>
              <div className="comprar">
                <span>Promo????o encerrada</span>
              </div>
            </div>
          </a>
        </div>
        <ul className="detalhe">
          <li>*Leia o regulamento para entender as regras e condi????es.</li>
          {" "}
          <li>**Brinde sujeito ?? disponibilidade.</li>
          <li>
            <a
              href="/static/regulamento-cupons-de-credito.pdf"
              title="Regulamento"
              target="_blank"
            >
              Regulamento
            </a>
          </li>
        </ul>
      </Container>
    </Cards>
  </Page>
);

export default CupomPage;
