import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import en from '../../../../public/locales/en/translation.json'
import ru from '../../../../public/locales/ru/translation.json'

i18next.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
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
    detection: {
        order: ['localStorage', 'navigator'],
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage'],
    },
});

export default i18next;