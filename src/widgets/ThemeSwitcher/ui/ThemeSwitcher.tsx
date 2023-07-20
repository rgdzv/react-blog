import { type FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { ThemeDark, ThemeLight } from 'shared/assets'
import { Button } from 'shared/ui'

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme()

    const icon =
        theme === Theme.DARK ? (
            <ThemeDark data-testid='dark-theme' />
        ) : (
            <ThemeLight data-testid='light-theme' />
        )

    const ariaLabel = theme === Theme.DARK ? 'to-light-theme' : 'to-dark-theme'

    return (
        <Button onClick={toggleTheme} aria-label={ariaLabel}>
            {icon}
        </Button>
    )
}
