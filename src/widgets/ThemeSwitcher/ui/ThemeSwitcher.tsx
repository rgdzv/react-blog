import { FC } from 'react'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib'
import { DarkIcon, LightIcon } from 'shared/assets'
import { Button, ThemeButton } from 'shared/ui'

interface ThemeSwitcherPropsInterface {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherPropsInterface> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const icon = theme === Theme.DARK ? <LightIcon/> : <DarkIcon/>

    return (
        <Button 
            onClick={toggleTheme}
            className={classNames(styles.switcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {icon}
        </Button>
    )
}
