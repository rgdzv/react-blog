import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    ru: {
        translation: {
            ru: 'ru'
        },
        main: {
            Главная: 'Главная'
        },
        about: {
            'О сайте': 'О сайте'
        },
        error: {
            'Страница не найдена!': 'Страница не найдена!',
            'Ой!': 'Ой!',
            'Извините. Произошла непредвиденная ошибка!':
                'Извините. Произошла непредвиденная ошибка!',
            'Неизвестная ошибка': 'Неизвестная ошибка',
            'Обновить страницу': 'Обновить страницу'
        }
    },
    en: {
        translation: {
            ru: 'en'
        },
        main: {
            Главная: 'Main'
        },
        about: {
            'О сайте': 'About'
        },
        error: {
            'Страница не найдена!': 'Page is not found!',
            'Ой!': 'Oops!',
            'Извините. Произошла непредвиденная ошибка!':
                'Sorry. An unexpected error has occured!',
            'Неизвестная ошибка': 'Unknown error',
            'Обновить страницу': 'Refresh the page'
        }
    }
}

export function i18nForTests(): typeof i18n {
    const inst = i18n.createInstance()

    void inst.use(initReactI18next).init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        interpolation: {
            escapeValue: false
        },
        resources: {
            ru: resources.ru,
            en: resources.en
        }
    })

    return inst
}
