import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import { SideBarSwitcher } from 'features/SideBarFeatures/SideBarSwitcher'
import { LangSwitcher } from 'features/SideBarFeatures/LangSwitcher'
import { ThemeSwitcher } from 'features/SideBarFeatures/ThemeSwitcher'
import { NavBar } from '../../../NavBar'
import styles from './SideBar.module.scss'

export const SideBar: FC = () => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const classNameFinal = classNames(styles.sideBar, {
        [styles.collapsed]: collapsed
    })

    return (
        <aside data-testid='sidebar' className={classNameFinal}>
            <NavBar collapsed={collapsed} />
            <div className={styles.toggleArrow}>
                <SideBarSwitcher
                    collapsed={collapsed}
                    handleToggle={handleToggle}
                />
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    )
}
