import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import { Button } from 'shared/ui'
import { ArrowDark, ArrowLight } from 'shared/assets'

interface SideBarTogglePropsInterface {
    onClick?: () => void
    collapsed: boolean
}

export const SideBarToggle: FC<SideBarTogglePropsInterface> = ({
    onClick,
    collapsed
}) => {
    const { theme } = useTheme()

    const icon =
        theme === Theme.DARK ? (
            <ArrowDark data-testid='arrow-dark' />
        ) : (
            <ArrowLight data-testid='arrow-light' />
        )

    const ariaLabel = collapsed ? 'expand-sidebar' : 'collapse-sidebar'

    return (
        <Button onClick={onClick} aria-label={ariaLabel}>
            {icon}
        </Button>
    )
}
