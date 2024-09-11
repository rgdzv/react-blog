import { memo, type FC } from 'react'
import { ArrowIcon } from 'shared/assets'
import { Button } from 'shared/ui'

interface SideBarSwitcherPropsInterface {
    collapsed: boolean
    handleToggle: () => void
}

export const SideBarSwitcher: FC<SideBarSwitcherPropsInterface> = memo(
    ({ collapsed, handleToggle }) => {
        const toggleAriaLabel = collapsed
            ? 'expand-sidebar'
            : 'collapse-sidebar'
        return (
            <Button
                className='toggleArrow'
                onClick={handleToggle}
                aria-label={toggleAriaLabel}
            >
                <ArrowIcon data-testid='arrow-icon' />
            </Button>
        )
    }
)
