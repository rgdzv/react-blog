import { createContext } from 'react'
import { Theme } from 'shared/types'
export interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const defaultContext = {
    theme: Theme.LIGHT,
    setTheme: (theme: Theme) => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultContext)

export const LOCAL_STORAGE_THEME_KEY = 'theme'
