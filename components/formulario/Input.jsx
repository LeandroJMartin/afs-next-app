import PropTypes from "prop-types";

import { InputGroup } from "../ui/formulario/Input";

const Input = ({
  nome,
  placeholder,
  handleInput,
  valor,
  valido,
  className,
  tipo,
  textarea
}) => (
  <>
    {!textarea && (
      <InputGroup>
        <input
          aria-label={nome}
          name={nome}
          value={valor}
          onChange={handleInput}
          className={`select-input ${className} ${
            !valido && !valor ? "select-input--erro" : ""
          }`}
          placeholder={placeholder}
          type={tipo}
        />
      </InputGroup>
    )}
    {textarea && (
      <InputGroup>
        <textarea
          aria-label={nome}
          name={nome}
          value={valor}
          onChange={handleInput}
          className={`select-input select-input--textarea ${className} ${
            !valido && !valor ? "select-input--erro" : ""
          }`}
          cols="30"
          rows="10"
          placeholder={placeholder}
        />
      </InputGroup>
    )}
  </>
);

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  nome: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valido: PropTypes.bool.isRequired,
  tipo: PropTypes.string,
  textarea: PropTypes.bool
};

Input.defaultProps = {
  tipo: "string",
  className: "",
  textarea: false
};
