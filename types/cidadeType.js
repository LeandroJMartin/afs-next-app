import { shape, number, string } from 'prop-types';

const cidadeType = shape({
  id: number.isRequired,
  nome: string.isRequired,
  estado_id: string.isRequired,
});

export default cidadeType;
