import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SideBarToggle } from 'widgets/SideBarToggle'
import { NavBar } from 'widgets/NavBar'

export const SideBar: FC = () => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const classNameFinal = classNames(
        styles.sideBar,
        { [styles.collapsed]: collapsed },
        []
    )

    return (
        <aside data-testid='sidebar' className={classNameFinal}>
            <NavBar collapsed={collapsed} />
            <div className={styles.toggleArrow}>
                <SideBarToggle onClick={handleToggle} collapsed={collapsed} />
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    )
}
