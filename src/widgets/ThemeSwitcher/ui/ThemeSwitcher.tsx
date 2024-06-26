import { type FC } from 'react'
import { ThemeIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import { useTheme } from 'app/providers/ThemeProvider'

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme()
    const themeAriaLabel = theme === 'dark' ? 'to-light-theme' : 'to-dark-theme'

    return (
        <Button
            className='theme'
            onClick={toggleTheme}
            aria-label={themeAriaLabel}
        >
            <ThemeIcon data-testid='theme-icon' />
        </Button>
    )
}
