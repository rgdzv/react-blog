import { memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowIcon } from 'shared/assets'
import { Button } from 'shared/ui'

interface SideBarSwitcherPropsInterface {
    collapsed: boolean
    handleToggle: () => void
}

export const SideBarSwitcher: FC<SideBarSwitcherPropsInterface> = memo(
    ({ collapsed, handleToggle }) => {
        const { t } = useTranslation()
        const toggleAriaLabel = collapsed
            ? 'expand-sidebar'
            : 'collapse-sidebar'
        const svgTitle = t('Сдвинуть')

        return (
            <Button
                className='toggleArrow'
                onClick={handleToggle}
                aria-label={toggleAriaLabel}
            >
                <ArrowIcon data-testid='arrow-icon' title={svgTitle} />
            </Button>
        )
    }
)
