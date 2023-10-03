import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './SideBar.module.scss'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SideBarSwitcher } from 'widgets/SideBarSwitcher'

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
