import { type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui'

import { useTranslation } from 'react-i18next'

interface NavBarPropsInterface {
    className?: string
}

export const NavBar: FC<NavBarPropsInterface> = ({ className }) => {
    const { t } = useTranslation(['main', 'about'])

    const main = t('Главная', { ns: 'main' })
    const about = t('О сайте', { ns: 'about' })

    return (
        <nav className={classNames(styles.navBar, {}, [className])}>
            <div className={styles.logo}>LOGO</div>
            <ul>
                <li>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                        {main}
                    </AppLink>
                </li>
                <li>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={'about'}>
                        {about}
                    </AppLink>
                </li>
            </ul>
        </nav>
    )
}
