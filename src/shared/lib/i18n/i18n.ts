import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export function i18nForProd(): typeof i18n {
    const inst = i18n.createInstance()

    void inst
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            lng: 'ru',
            fallbackLng: 'ru',
            debug: __IS_DEV__,
            interpolation: {
                escapeValue: false
            }
        })

    return inst
}
