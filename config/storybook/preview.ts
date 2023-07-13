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
        }
    },
    decorators: [ThemeDecorator, RouterDecorator]
}

export default preview
