import 'app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

const getTheme = (theme: Theme): Theme => {
    return theme
}

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = getTheme(context.globals.theme)
    
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )
}
