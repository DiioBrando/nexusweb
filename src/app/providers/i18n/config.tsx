import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import en from '../../../../public/locales/en/translation.json'
import ru from '../../../../public/locales/ru/translation.json'

i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    defaultNS: 'translation',
    supportedLngs: ['en', 'ru'],
    resources: {
        en: {
            translation: en,
        },
        ru: {
            translation: ru,
        }
    },
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: "/locales/{{lng}}/translation.json",
    },
});

export default i18next;