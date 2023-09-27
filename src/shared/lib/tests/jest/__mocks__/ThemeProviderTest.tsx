import { type FC, type ReactNode } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { useTheme } from 'app/providers/ThemeProvider/hooks/useTheme'

interface TestProps {
    children: ReactNode
}

const AppDivSimulation: FC<TestProps> = ({ children }) => {
    const { theme } = useTheme()
    return (
        <div data-testid='app' className={`app ${theme}`}>
            {children}
        </div>
    )
}

export const ThemeProviderTest: FC<TestProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <AppDivSimulation>{children}</AppDivSimulation>
        </ThemeProvider>
    )
}
