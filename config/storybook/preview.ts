import {
    LanguageDecorator,
    RouterDecorator,
    StoreDecorator,
    StyleDecorator,
    ThemeDecorator
} from 'shared/config'
import type { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        a11y: {
            element: '#storybook-root',
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: false
                    }
                ]
            },
            manual: false
        }
    },
    globalTypes: {
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'ru', title: 'Russian' },
                    { value: 'en', title: 'English' }
                ],
                showName: true
            }
        },
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: 'light', icon: 'circlehollow', title: 'light' },
                    { value: 'dark', icon: 'circle', title: 'dark' }
                ],
                dynamicTitle: true
            }
        }
    },
    decorators: [
        RouterDecorator,
        StoreDecorator,
        ThemeDecorator,
        StyleDecorator,
        LanguageDecorator
    ]
}

export default preview
