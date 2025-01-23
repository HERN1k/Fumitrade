import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uk from "../translations/uk.json";
//import LanguageDetector from "i18next-browser-languagedetector";

i18n
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uk: {
                translation: uk,
            },
        },
        fallbackLng: "uk",
        lng: "uk",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;