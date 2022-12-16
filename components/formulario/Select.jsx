import PropTypes from 'prop-types';
import { SelectGroup } from '../ui/formulario/Input';

// reformulado para receber valores unidimensionais somente, nao object
const Select = ({
  nome,
  placeholder,
  handleInput,
  valor,
  valores,
  valido,
  className,
  carregando,
}) => (
  <SelectGroup>
    <select
      aria-label={nome}
      name={nome}
      value={valor}
      onChange={handleInput}
      disabled={valores.length < 1}
      className={`select-input ${className} ${
        !valido && !valor ? 'select-input--erro' : ''
      }`}
    >
      <option value="" disabled>
        {carregando ? 'Carregando...' : placeholder}
      </option>
      {valores.map((valorItem) => (
        <option key={valorItem} value={valorItem}>
          {valorItem}
        </option>
      ))}
    </select>
  </SelectGroup>
);

export default Select;

Select.propTypes = {
  className: PropTypes.string,
  carregando: PropTypes.bool,
  nome: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  valor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  valores: PropTypes.arrayOf(PropTypes.string).isRequired,
  valido: PropTypes.bool.isRequired,
};

Select.defaultProps = {
  className: '',
  carregando: false,
};
