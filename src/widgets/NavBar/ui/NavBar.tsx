import { type FC } from 'react'
import styles from './NavBar.module.scss'
import { AppLink } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { classNames, links } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { useLocation, useNavigate } from 'react-router-dom'
interface NavBarPropsInterface {
    collapsed: boolean
}

export const NavBar: FC<NavBarPropsInterface> = ({ collapsed }) => {
    const navigate = useNavigate()
    const { theme } = useTheme()
    const { pathname } = useLocation()
    const { t } = useTranslation(['main', 'about'])

    const handleNavigate = (to: string): void => {
        navigate(to)
    }

    const linkList = links.map((item) => {

        const linkName = collapsed ? '' : t(item.name, { ns: item.file })

        const className = classNames(styles.list, {}, [
            pathname === item.to ? styles.active : '',
            collapsed ? styles.collapsed : ''
        ])

        const handleClick = (): void => {
            handleNavigate(item.to)
        }

        const ariaLabel = collapsed ? t(item.name, { ns: item.file }) : ''

        return (
            <li
                key={item.name}
                className={className}
                onClick={handleClick}
                data-testid={item.file}
            >
                <>
                    {theme === 'light' ? item.icon.light : item.icon.dark}
                    <AppLink to={item.to} aria-label={ariaLabel}>{linkName}</AppLink>
                </>
            </li>
        )
    })

    return (
        <nav className={styles.navBar} data-testid="navbar">
            <ul>{linkList}</ul>
        </nav>
    )
}
