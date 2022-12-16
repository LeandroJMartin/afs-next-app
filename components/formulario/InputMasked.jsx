/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { InputGroup } from '../ui/formulario/Input';

import { cpfMask, cnpjMask } from '../../helpers/masks';

const InputMasked = ({
  nome,
  placeholder,
  handleInput,
  valor,
  valido,
  className,
  tipo,
  mask,
  custom = true,
}) => (
  <InputGroup>
    {mask === 'cpf/cnpj' ? (
      <MaskedInput
        mask={(value) => (value.length > 14 ? cnpjMask : cpfMask)}
        aria-label={nome}
        name={nome}
        value={valor}
        onChange={handleInput}
        className={`select-input ${className} ${
          !valido && !valor ? 'select-input--erro' : ''
        }`}
        placeholder={placeholder}
        type={tipo}
        guide={false}
      />
    ) : (
      <MaskedInput
        mask={mask}
        aria-label={nome}
        name={nome}
        value={valor}
        onChange={handleInput}
        className={`select-input ${className} ${
          !custom || !valido ? 'select-input--erro' : ''
        }`}
        placeholder={placeholder}
        type={tipo}
      />
    )}
  </InputGroup>
);

export default InputMasked;

InputMasked.propTypes = {
  className: PropTypes.string,
  nome: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valido: PropTypes.bool.isRequired,
  mask: PropTypes.any.isRequired,
  tipo: PropTypes.string.isRequired,
  custom: PropTypes.bool,
};

InputMasked.defaultProps = {
  className: '',
  valor: '',
};
