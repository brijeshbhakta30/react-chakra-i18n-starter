import { initReactI18next } from "react-i18next";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { convertLanguageJsonToObject, translationsJson } from "./translations";

// Create the "translations" object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(translationsJson, null);

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: "id",
    debug: process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

if (module.hot) {
  module.hot.accept("./translations", () => {
    window.location.reload();
  });
}