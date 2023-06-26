import { type FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { DarkIcon, LightIcon } from 'shared/assets'
import { Button } from 'shared/ui'

interface ThemeSwitcherPropsInterface {
}

export const ThemeSwitcher: FC<ThemeSwitcherPropsInterface> = () => {
    const { theme, toggleTheme } = useTheme()

    const icon = theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> 

    return (
        <Button
            onClick={toggleTheme}
        >
            {icon}
        </Button>
    )
}
