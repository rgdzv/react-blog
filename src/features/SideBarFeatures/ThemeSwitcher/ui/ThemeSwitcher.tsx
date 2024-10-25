import { useCallback, memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeIcon } from 'shared/assets'
import { useAppDispatch, useAppSelector, useTheme } from 'shared/lib'
import { Button } from 'shared/ui'
import { Theme } from 'shared/types'
import {
    getUserAuthData,
    getUserJsonSettingsIsLoading,
    saveJsonSettings
} from '../../../Authorization'

export const ThemeSwitcher: FC = memo(() => {
    const { theme, toggleTheme } = useTheme()
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUserAuthData)
    const jsonSettingsIsLoading = useAppSelector(getUserJsonSettingsIsLoading)
    const { t } = useTranslation()
    const themeAriaLabel = theme === 'dark' ? 'to-light-theme' : 'to-dark-theme'
    const svgTitle = t('Сменить тему')

    const handleToggleTheme = useCallback(() => {
        if (user !== undefined) {
            void dispatch(
                saveJsonSettings({
                    theme: theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
                })
            )
        } else {
            toggleTheme()
        }
    }, [dispatch, theme, toggleTheme, user])

    return (
        <Button
            className='theme'
            onClick={handleToggleTheme}
            aria-label={themeAriaLabel}
            disabled={jsonSettingsIsLoading}
        >
            <ThemeIcon data-testid='theme-icon' title={svgTitle} />
        </Button>
    )
})
