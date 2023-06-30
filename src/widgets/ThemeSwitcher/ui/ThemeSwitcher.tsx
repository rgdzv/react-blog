import { type FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { ThemeDark, ThemeLight } from 'shared/assets'
import { Button } from 'shared/ui'

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme()

    const icon = theme === Theme.DARK ? <ThemeDark /> : <ThemeLight /> 

    return (
        <Button
            onClick={toggleTheme}
        >
            {icon}
        </Button>
    )
}
