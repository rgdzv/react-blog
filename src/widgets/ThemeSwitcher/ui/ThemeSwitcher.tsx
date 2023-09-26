import { type FC } from 'react'
import { ThemeIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import styles from './ThemeSwitcher.module.scss'
import { useTheme } from 'shared/lib'

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme()
    const themeAriaLabel = theme === 'dark' ? 'to-light-theme' : 'to-dark-theme'

    return (
        <Button onClick={toggleTheme} aria-label={themeAriaLabel}>
            <ThemeIcon data-testid='theme-icon' className={styles.icon} />
        </Button>
    )
}
