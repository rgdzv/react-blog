import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './SideBar.module.scss'
import { NavBar } from 'widgets/NavBar'
import { ArrowIcon, ThemeIcon } from 'shared/assets'
import { Button, ButtonTheme } from 'shared/ui'
import { useTheme } from 'app/providers/ThemeProvider'
import { useTranslation } from 'react-i18next'

export const SideBar: FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { t, i18n } = useTranslation()

    const handleToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const toggleLang = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    const classNameFinal = classNames(
        styles.sideBar,
        { [styles.collapsed]: collapsed },
        []
    )

    const toggleAriaLabel = collapsed ? 'expand-sidebar' : 'collapse-sidebar'
    const themeAriaLabel = theme === 'dark' ? 'to-light-theme' : 'to-dark-theme'

    const language = t('ru')

    return (
        <aside data-testid='sidebar' className={classNameFinal}>
            <NavBar collapsed={collapsed} />
            <div className={styles.toggleArrow}>
                <Button onClick={handleToggle} aria-label={toggleAriaLabel}>
                    <ArrowIcon
                        data-testid='arrow-icon'
                        className={styles.icon}
                    />
                </Button>
            </div>
            <div className={styles.switchers}>
                <Button onClick={toggleTheme} aria-label={themeAriaLabel}>
                    <ThemeIcon
                        data-testid='theme-icon'
                        className={styles.icon}
                    />
                </Button>
                <Button onClick={toggleLang} className={ButtonTheme.LANG}>
                    {language}
                </Button>
            </div>
        </aside>
    )
}
