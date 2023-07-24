import type { Preview } from '@storybook/react'
import { RouterDecorator, ThemeDecorator } from 'shared/lib'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
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
    decorators: [RouterDecorator, ThemeDecorator]
}

export default preview
