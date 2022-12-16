import { shape, string, arrayOf, array, object } from "prop-types";

import telefoneType from "./telefoneType";

export const enderecoType = shape({
  bairro: string.isRequired,
  cep: string.isRequired,
  complemento: string,
  cidade: string.isRequired,
  uf: string.isRequired
});

export const lojaLinkType = shape({
  _id: string,
  path: string,
  nome: string,
  link_balcao_online: string,
  endereco: shape({
    cidade: string,
    uf: string
  })
});

const unidadeType = shape({
  _id: string.isRequired,
  path: string.isRequired,
  nome: string.isRequired,
  status: string,
  endereco: enderecoType,
  telefones: arrayOf(telefoneType),
  redes_sociais: shape({
    facebook: string,
    instagram: string
  }),
  fotos: shape({
    url: string
  })
});

export default unidadeType;
