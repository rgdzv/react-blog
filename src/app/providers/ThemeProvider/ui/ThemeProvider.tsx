import { useMemo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const'
import { ThemeContext } from 'shared/lib'
import { Theme } from 'shared/types'
interface ThemeContextProps {
    children: ReactNode
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeProvider: FC<ThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
