import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translationEN.json';
import translationPT from './locales/kr/translationKR.json';

const resources = {
    en: {
        translation: translationEN
    },
    ko: {
        translation: translationPT
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ko',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
