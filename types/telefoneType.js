import {
  shape, string, oneOf, bool,
} from 'prop-types';

const telefoneType = shape({
  numero: string.isRequired,
  tipo: oneOf(['celular', 'fixo']),
  whatsapp: bool,
});

export default telefoneType;
