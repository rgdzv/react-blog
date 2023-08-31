import { type FC } from 'react'
import { ArrowIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import styles from './SideBarSwitcher.module.scss'

interface SideBarSwitcherPropsInterface {
    collapsed: boolean
    handleToggle: () => void
}

export const SideBarSwitcher: FC<SideBarSwitcherPropsInterface> = ({
    collapsed,
    handleToggle
}) => {
    const toggleAriaLabel = collapsed ? 'expand-sidebar' : 'collapse-sidebar'
    return (
        <Button onClick={handleToggle} aria-label={toggleAriaLabel}>
            <ArrowIcon data-testid='arrow-icon' className={styles.icon} />
        </Button>
    )
}
