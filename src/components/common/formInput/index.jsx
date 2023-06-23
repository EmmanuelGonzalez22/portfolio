import { useFormContext } from "react-hook-form";
import { capitalizeFirstLetter } from "../../../helpers";

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  required,
  pattern,
  errorMessage,
  minLength,
  match,
  className,
  autoComplete,
  textarea,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const handleChange = (e) => {
    // validación de los inputs
    trigger(e.target.name);
    if (e.target.name === "email") {
      trigger("emailConfirm");
    }
    // valido si el campo no esta vacío, y agrego una clase
    if (e.target.value !== "") {
      e.target.classList.add("has-value");
    } else {
      e.target.classList.remove("has-value");
    }
    // convierto en minuscula el valor de los email
    if (e.target.name === "email" || e.target.name === "emailConfirm") {
      e.target.value = e.target.value.toLowerCase();
    }
    // convierto en mayuscula la primer letra del nombre
    if (e.target.name === "name" || e.target.name === "message") {
      e.target.value = capitalizeFirstLetter(e.target.value);
    }
  };

  // Renderiza un textarea si la prop "textarea" es verdadera, de lo contrario renderiza un input
  const renderInput = () => {
    if (textarea) {
      return (
        <textarea
          className={className}
          placeholder={placeholder}
          name={id}
          id={id}
          required={required}
          {...register(id, {
            required: required && `Campo obligatorio`,
            pattern: pattern && {
              value: pattern,
              message: errorMessage,
            },
          })}
          onFocus={handleChange}
          onKeyUp={handleChange}
        ></textarea>
      );
    } else {
      return (
        <input
          autoComplete={autoComplete}
          className={className}
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id, {
            required: required && `Campo obligatorio`,
            pattern: pattern && {
              value: pattern,
              message: errorMessage,
            },
            minLength: {
              value: minLength,
              message: `Mínimo ${minLength} caracteres`,
            },
            validate: match && {
              matchesInputs: (value) => {
                return value === watch(match) || "Los campos no coinciden";
              },
            },
          })}
          onFocus={handleChange}
          onKeyUp={handleChange}
        />
      );
    }
  };

  return (
    <>
      {renderInput()}
      <label htmlFor={id}>{label}</label>
      {errors[id] && <span className='error__msg'>{errors[id].message}</span>}
    </>
  );
};

export { FormInput };
