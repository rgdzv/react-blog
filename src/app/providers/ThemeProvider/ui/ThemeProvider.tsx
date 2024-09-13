import { useEffect, useMemo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { getUserJsonSettings } from 'features/Authorization'
import { ThemeContext, useAppSelector } from 'shared/lib'
import { Theme } from 'shared/types'
interface ThemeContextProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeContextProps> = ({ children }) => {
    const userJsonSettings = useAppSelector(getUserJsonSettings)
    const [theme, setTheme] = useState<Theme>(
        userJsonSettings?.theme ?? Theme.LIGHT
    )

    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    useEffect(() => {
        if (userJsonSettings?.theme) {
            setTheme(userJsonSettings?.theme)
        }
    }, [userJsonSettings?.theme, theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
