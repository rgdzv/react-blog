import { type Decorator } from '@storybook/react'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { type ReactNode } from 'react'

export const AppSimulation = ({
    children
}: {
    children: ReactNode
}): JSX.Element => {
    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`} data-testid='app'>
            {children}
        </div>
    )
}

export const ThemeDecorator: Decorator = (Story) => {
    return (
        <ThemeProvider>
            <AppSimulation>
                <Story />
            </AppSimulation>
        </ThemeProvider>
    )
}
