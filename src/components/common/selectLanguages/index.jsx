import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../data";

const SelectLanguages = () => {
  const { i18n } = useTranslation();

  const onChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <select
      className='form-control'
      defaultValue={i18n.language}
      onChange={onChange}
    >
      {LANGUAGES.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export { SelectLanguages };
