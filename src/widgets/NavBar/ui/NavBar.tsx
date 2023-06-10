import { FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './NavBar.module.scss'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface NavBarPropsInterface {
    className?: string
}

export const NavBar: FC<NavBarPropsInterface> = ({ className }) => {
    const { t } = useTranslation(['main', 'about'])

    return (
        <nav className={classNames(styles.navBar, {}, [className])}>
            <div className={styles.logo}>LOGO</div>
            <ul>
                <li>
                    <AppLink 
                        theme={AppLinkTheme.SECONDARY} 
                        to={`/`}>
                            {t('Главная', { ns: 'main' })}
                    </AppLink>
                </li>
                <li>
                    <AppLink 
                        theme={AppLinkTheme.SECONDARY} 
                        to={`about`}>
                            {t('О сайте', { ns: 'about' })}
                    </AppLink>
                </li>
            </ul>
        </nav>
    )
}
