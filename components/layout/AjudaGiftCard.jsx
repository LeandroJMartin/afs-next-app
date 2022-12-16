import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { InfosCompletasAjudaGiftCard } from "../../helpers/dados";

const AjudaCardWrapper = styled.div`
  width: 70%;
  margin: 1.5rem 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const AjudaCardTextos = styled.div`
  margin: 0.5rem 0;
`;

const AjudaCardTitle = styled.p`
  background-color: #f4f4f4;
  color: #595959;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-image: initial;
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 0 0 0 !important;

  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AjudaCardDesc = styled.div`
  display: ${props => (props.active ? "flex" : "none")};
  border: 1px solid #d9d9d9;
  border-top: ${props => (props.active ? "transparent" : "none")};
  border-radius: 0 0 5px 5px;
  position: relative;
  top: -1px;
  color: #344c5a;
  margin-bottom: 0.5rem;
  font-size: 15px;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export default function AjudaGiftCard() {
  const [painelControllers, setPainelControllers] = useState({
    paragrafoId: 0
  });

  function handleParagraphChange(id) {
    if (painelControllers.paragrafoId == id) {
      setPainelControllers({
        paragrafoId: 0
      });
    } else {
      setPainelControllers({
        paragrafoId: id
      });
    }
  }

  return (
    <AjudaCardWrapper>
      {InfosCompletasAjudaGiftCard.map(item => (
        <AjudaCardTextos
          key={item.id}
          onClick={() => handleParagraphChange(item.id)}
        >
          <AjudaCardTitle>{item.title}</AjudaCardTitle>
          <AjudaCardDesc active={item.id === painelControllers.paragrafoId}>
            {item.description}
          </AjudaCardDesc>
        </AjudaCardTextos>
      ))}
    </AjudaCardWrapper>
  );
}
