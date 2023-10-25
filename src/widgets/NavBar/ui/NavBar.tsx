import { useMemo, type FC } from 'react'
import styles from './NavBar.module.scss'
import { AppLink } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppLinks } from '../model/hooks/useAppLinks'
interface NavBarPropsInterface {
    collapsed: boolean
}

export const NavBar: FC<NavBarPropsInterface> = ({ collapsed }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { t } = useTranslation(['main', 'about', 'profile'])
    const links = useAppLinks()

    const linkList = useMemo(
        () =>
            links.map((item) => {
                const linkName = collapsed
                    ? ''
                    : t(item.name, { ns: item.file })

                const className = classNames(styles.list, {}, [
                    pathname === item.to ? styles.active : '',
                    collapsed ? styles.collapsed : ''
                ])

                const handleNavigate = (): void => {
                    navigate(item.to)
                }

                const ariaLabel = collapsed
                    ? t(item.name, { ns: item.file })
                    : ''

                return (
                    <li
                        key={item.name}
                        className={className}
                        onClick={handleNavigate}
                        data-testid={item.file}
                    >
                        <div className={styles.icon}>{item.icon}</div>
                        <AppLink to={item.to} aria-label={ariaLabel}>
                            {linkName}
                        </AppLink>
                    </li>
                )
            }),
        [collapsed, pathname, t, navigate, links]
    )

    return (
        <nav className={styles.navBar} data-testid='navbar'>
            <ul>{linkList}</ul>
        </nav>
    )
}
