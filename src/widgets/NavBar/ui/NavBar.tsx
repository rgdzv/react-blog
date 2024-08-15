import { type FC, useMemo } from 'react'
import { AppLink, Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppLinks } from '../lib/hooks/useAppLinks'
import styles from './NavBar.module.scss'
interface NavBarPropsInterface {
    collapsed: boolean
}

export const NavBar: FC<NavBarPropsInterface> = ({ collapsed }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { t } = useTranslation(['main', 'about', 'profile', 'article'])
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

                const ariaLabel = t(item.name, { ns: item.file })

                return (
                    <li
                        key={item.name}
                        className={className}
                        onClick={handleNavigate}
                        data-testid={item.file}
                    >
                        <Button className='navbar_icon' aria-label={ariaLabel}>
                            {item.icon}
                        </Button>
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
