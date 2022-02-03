/* eslint-disable no-param-reassign */
import en from "./en/translation.json";

/**
 * This file is separate from the "./i18n.js" simply to make the Hot Module Replacement work seamlessly.
 * Your components can import this file in "messages.js" files which would ruin the HMR if this isn't a separate module
 */

export const translations: any = {};
export const translationsJson = {
  en: {
    translation: en,
  },
};

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still having the intellisense support
 * along with type-safety
 */
export const convertLanguageJsonToObject = (json: any, current: any, objToConvertTo = translations) => {
  Object.keys(json).forEach((key) => {
    const currentLookupKey: any = current ? `${current}.${key}` : key;
    if (typeof json[key] === "object") {
      objToConvertTo[key] = {};
      convertLanguageJsonToObject(json[key], currentLookupKey, objToConvertTo[key]);
    } else {
      objToConvertTo[key] = currentLookupKey;
    }
  });
};
