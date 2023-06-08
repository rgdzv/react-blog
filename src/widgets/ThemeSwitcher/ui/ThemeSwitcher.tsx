import { FC } from 'react'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib'
import { DarkIcon, LightIcon } from 'shared/assets'

interface ThemeSwitcherPropsInterface {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherPropsInterface> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const icon = theme === Theme.DARK ? <LightIcon/> : <DarkIcon/>

    return (
        <button 
            onClick={toggleTheme}
            className={classNames(styles.switcher, {}, [className])}
        >
            {icon}
        </button>
    )
}
