import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SideBarToggle } from 'widgets/SideBarToggle'

interface SideBarPropsInterface {
    className?: string
}

export const SideBar: FC<SideBarPropsInterface> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const classNameChecked = className ?? ''
    const classNameFinal = classNames(
        styles.sideBar,
        { [styles.collapsed]: collapsed },
        [classNameChecked]
    )

    return (
        <div data-testid='sidebar' className={classNameFinal}>
            <div className={styles.toggleArrow}>
                <SideBarToggle onClick={handleToggle}/>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
