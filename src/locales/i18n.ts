import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import srLatin from "./sr-latin";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: en.translation,
    },
    sr: {
      translations: srLatin.translation,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "sr"];

export default i18n;
