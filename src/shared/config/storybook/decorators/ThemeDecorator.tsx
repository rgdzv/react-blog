import type { ReactNode } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { useTheme } from '../../../lib'
import type { Decorator } from '@storybook/react'

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
