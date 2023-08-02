import { useEffect } from 'react'
import i18n from '../../i18n/i18n'
import { type Decorator } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'

export const LanguageDecorator: Decorator = (Story, context) => {
    const { locale } = context.globals

    useEffect(() => {
        void i18n.changeLanguage(locale)
    }, [locale])

    return (
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    )
}
