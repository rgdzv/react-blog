import { type Decorator } from '@storybook/react'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { type FC, type ReactElement, type ReactNode, useEffect } from 'react'
interface AppSimulationPropsInterface {
    children: ReactNode
    theme2: string
}

const AppSimulation: FC<AppSimulationPropsInterface> = ({
    children,
    theme2
}): ReactElement => {
    const { toggleTheme } = useTheme()

    useEffect(() => {
        toggleTheme()
    }, [theme2])

    return (
        <div className={`app ${theme2}`} data-testid='app'>
            {children}
        </div>
    )
}

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme2: string = context.globals.theme

    return (
        <ThemeProvider>
            <AppSimulation theme2={theme2}>
                <Story />
            </AppSimulation>
        </ThemeProvider>
    )
}
