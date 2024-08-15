import { createContext } from 'react'
import { Theme } from '../../types'

export interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const defaultContext = {
    theme: Theme.LIGHT,
    setTheme: (theme: Theme) => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultContext)
