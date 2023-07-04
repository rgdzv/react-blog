import i18n from '../../i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import { type Decorator } from '@storybook/react'

export const LanguageDecorator: Decorator = (Story) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    )
}
