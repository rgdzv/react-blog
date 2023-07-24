import { type Decorator } from '@storybook/react'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { type FC, type ReactElement, type ReactNode } from 'react'
interface AppSimulationPropsInterface {
    children: ReactNode
}

const AppSimulation: FC<AppSimulationPropsInterface> = ({
    children
}): ReactElement => {
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
