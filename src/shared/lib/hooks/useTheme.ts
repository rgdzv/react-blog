import { useContext } from 'react'
import { Theme } from 'shared/types'
import { ThemeContext } from '../context/ThemeContext'
interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
