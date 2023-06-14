import { createContext } from 'react'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}
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
