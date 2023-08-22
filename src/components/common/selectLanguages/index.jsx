import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../data";
import spanish from "../../../assets/img/spanish.svg";
import english from "../../../assets/img/usa.svg";
import "./styles.scss";

const SelectLanguages = ({ removeShowMenu }) => {
  const { i18n } = useTranslation();

  const onChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    removeShowMenu();
  };

  console.log(spanish);

  return (
    <>
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
      <div>
        <img
          src={i18n.language === "en" ? english : spanish}
          alt={i18n.language}
        />
      </div>
    </>
  );
};

export { SelectLanguages };
