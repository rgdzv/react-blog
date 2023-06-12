import { type FC, useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SideBarPropsInterface {
    className?: string
}

export const SideBar: FC<SideBarPropsInterface> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(
                styles.sideBar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <button onClick={handleToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
