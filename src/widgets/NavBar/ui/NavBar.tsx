import { FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './NavBar.module.scss'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui'

interface NavBarPropsInterface {
    className?: string
}

export const NavBar: FC<NavBarPropsInterface> = ({ className }) => {
    return (
        <nav className={classNames(styles.navBar, {}, [className])}>
            <div className={styles.logo}>LOGO</div>
            <ul>
                <li>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={`about`}>About</AppLink>
                </li>
                <li>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={`main`}>Main</AppLink>
                </li>
            </ul>
        </nav>
    )
}
