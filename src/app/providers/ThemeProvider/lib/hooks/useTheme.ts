import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../ThemeContext'
import { Theme } from 'shared/types'
interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
