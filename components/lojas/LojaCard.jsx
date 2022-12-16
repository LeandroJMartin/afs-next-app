import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { lojaLinkType } from "../../types/lojaType";
import Icon from "../ui/icons/Icon";

const Card = styled.a`
  background-color: ${(props) => props.theme.client.colors.verdeFolha};
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.boxShadows.stronger};
  color: white;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 3rem;
  height: 14rem;
`;

const Topo = styled.div`
  background-image: url('/static/img/fundo-card-unidade.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 1.7rem;
  font-weight: 500;
  .final {
    color: #ffeb3b;
  }
`;

const Faixa = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.5rem;
  .texto,
  .icone {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .texto {
    background: #65a17b;
    text-transform: uppercase;
  }
  .icone {
    background: #598c6c;
    svg {
      width: 2rem;
      height: 2rem;
      fill: white;
    }
  }
`;

const Wrapper = ({
  lojaLink: { path, nome, link_balcao_online },
  modo,
  children,
}) => {
  if (modo === "balcao" && link_balcao_online) {
    return (
      <Card
        href={link_balcao_online}
        target="_blank"
        rel="noreferrer noopener"
        title="Comprar Online"
      >
        {children}
      </Card>
    );
  }

  return (
    <Link href={`/${path}`} passHref>
      <Card title={nome}>{children}</Card>
    </Link>
  );
};

const LojaCard = ({ lojaLink, modo }) => {
  const [local, final] = lojaLink.nome.replace("AFS", "").split("-");

  return (
    <Wrapper lojaLink={lojaLink} modo={modo}>
      <Topo>
        <span className="local">{local}</span>
        <span className="final">{final}</span>
      </Topo>
      <Faixa>
        <div className="texto">
          <span>{modo === "balcao" ? "Comprar" : "Ver Mais"}</span>
        </div>
        <div className="icone">
          <Icon
            tipo="svg"
            icon={modo === "balcao" ? "shopping-cart" : "enter"}
          />
        </div>
      </Faixa>
    </Wrapper>
  );
};

Wrapper.propTypes = {
  lojaLink: lojaLinkType.isRequired,
  modo: PropTypes.oneOf(["balcao", "hotsite"]),
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  modo: "hotsite",
};

LojaCard.propTypes = {
  lojaLink: lojaLinkType.isRequired,
  modo: PropTypes.oneOf(["balcao", "hotsite"]),
};

LojaCard.defaultProps = {
  modo: "hotsite",
};

export default LojaCard;
