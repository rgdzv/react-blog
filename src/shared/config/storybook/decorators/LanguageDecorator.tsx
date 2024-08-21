import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18nForTests } from '../../../lib'
import type { Decorator } from '@storybook/react'

export const LanguageDecorator: Decorator = (Story, context) => {
    const { locale } = context.globals
    const i18n = i18nForTests()

    useEffect(() => {
        void i18n.changeLanguage(locale)
    }, [locale, i18n])

    return (
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    )
}
