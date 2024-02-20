import { useAppSelector } from 'app/providers/StoreProvider'
import { getUserAvatar, isUserAdmin, isUserManager } from 'entities_/User'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { noavatar } from 'shared/assets'
import { DropDown, Image } from 'shared/ui'

interface LoginDropDownPropsInterface {
    handleLogOut: () => void
    id: string
}

export const LoginDropDown: FC<LoginDropDownPropsInterface> = ({
    handleLogOut,
    id
}) => {
    const userAvatar = useAppSelector(getUserAvatar)
    const { t } = useTranslation('menu')
    const isAdmin = useAppSelector(isUserAdmin)
    const isManager = useAppSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin || isManager
    const adminPanel = isAdminPanelAvailable
        ? [{ id: 'admin', content: t('Админ'), href: '/admin' }]
        : []

    const items = [
        ...adminPanel,
        {
            id: 'settings',
            content: t('Настройки'),
            href: '/settings'
        },
        {
            id: 'profile',
            content: t('Профиль'),
            href: `/profile/${id}`
        },
        {
            id: 'out',
            content: t('Выйти'),
            onClick: handleLogOut
        }
    ]

    const avatar = userAvatar ?? noavatar
    const trigger = (
        <Image
            src={avatar}
            className='login_dropdown_avatar'
            alt='login dropdown avatar'
        />
    )

    return <DropDown trigger={trigger} items={items} direction='bottom left' />
}
