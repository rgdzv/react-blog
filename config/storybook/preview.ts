import type { Preview } from '@storybook/react'
import { RouterDecorator, StyleDecorator, ThemeDecorator } from 'shared/lib'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            }
        }
    },
    decorators: [StyleDecorator, ThemeDecorator, RouterDecorator]
}

export default preview
