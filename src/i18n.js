import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./data/languages/en/index.json";
import translationES from "./data/languages/es/index.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use
    fallbackLng: "en", // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
