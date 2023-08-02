import { type Decorator } from '@storybook/react'

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme: string = context.globals.theme

    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )
}
