import {useTranslation} from "react-i18next";

export const useLanguage = () => {
    const {t, i18n} = useTranslation();

    const setLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return {
        currentLanguage: i18n.language,
        setLanguage,
        t,
        i18n,
    }
}