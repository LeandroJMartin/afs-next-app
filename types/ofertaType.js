import {
  shape, number, string, arrayOf, oneOf,
} from 'prop-types';

const ofertaType = shape({
  _id: string.isRequired,
  tipo: oneOf(['produto', 'categoria', 'banner']),
  titulo: string.isRequired,
  info: string,
  marca: string,
  rating: number,
  valor_de: number,
  valor_atual: number,
  desconto_figurativo: string,
  observacao: string,
  fundo: string,
  cor_fundo: string,
  datas: shape({
    dia_unico: string,
    dia_de: string,
    dia_ate: string,
  }),
  thumbs: arrayOf(
    shape({
      type: oneOf(['webp', 'jpeg', 'png']),
      path: string,
    }),
  ),
});

export default ofertaType;
