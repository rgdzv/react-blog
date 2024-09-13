import type { FC, ReactNode } from 'react'
import { useTheme } from '../../../../hooks/useTheme'

interface TestProps {
    children: ReactNode
}

export const ThemeProviderTest: FC<TestProps> = ({ children }) => {
    const { theme } = useTheme()
    return (
        <div data-testid='app' className={`app ${theme}`}>
            {children}
        </div>
    )
}
