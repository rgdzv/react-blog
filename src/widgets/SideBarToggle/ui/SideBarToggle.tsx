import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import { Button } from 'shared/ui'
import { ArrowDark, ArrowLight } from 'shared/assets'

interface SideBarTogglePropsInterface {
    onClick?: () => void
}

export const SideBarToggle: FC<SideBarTogglePropsInterface> = ({ onClick }) => {
    const { theme } = useTheme()
    const icon = theme === Theme.DARK ? <ArrowDark /> : <ArrowLight />

    return (
        <Button
            onClick={onClick}
        >
            {icon}
        </Button>
    )
}
