import { useMemo, memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { noavatar } from 'shared/assets'
import { DropDown, Image } from 'shared/ui'
import { RoutesType } from 'shared/types'
import { useAppSelector } from 'shared/lib'
import {
    isUserAdmin,
    isUserManager
} from '../../model/selectors/getUserRole/getUserRole'
import { getUserAvatar } from '../../model/selectors/getUserAvatar/getUserAvatar'

interface LoginDropDownPropsInterface {
    handleLogOut: () => void
    id: string
}

export const LoginDropDown: FC<LoginDropDownPropsInterface> = memo(
    ({ handleLogOut, id }) => {
        const userAvatar = useAppSelector(getUserAvatar)
        const { t } = useTranslation('menu')
        const isAdmin = useAppSelector(isUserAdmin)
        const isManager = useAppSelector(isUserManager)
        const isAdminPanelAvailable = isAdmin || isManager

        const items = useMemo(() => {
            const adminPanel = isAdminPanelAvailable
                ? [{ id: 'admin', content: t('Админ'), href: '/admin' }]
                : []

            return [
                ...adminPanel,
                {
                    id: 'settings',
                    content: t('Настройки'),
                    href: `/${RoutesType.SETTINGS}`
                },
                {
                    id: 'profile',
                    content: t('Профиль'),
                    href: `/${RoutesType.PROFILE}/${id}`
                },
                {
                    id: 'out',
                    content: t('Выйти'),
                    onClick: handleLogOut
                }
            ]
        }, [handleLogOut, id, t, isAdminPanelAvailable])

        const trigger = (
            <Image
                src={userAvatar}
                className='login_dropdown_avatar'
                alt='login dropdown avatar'
                errorImage={noavatar}
            />
        )

        return (
            <DropDown trigger={trigger} items={items} direction='bottom left' />
        )
    }
)
