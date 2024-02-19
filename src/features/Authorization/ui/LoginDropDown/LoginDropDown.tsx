import { useAppSelector } from 'app/providers/StoreProvider'
import { getUserAvatar } from 'entities_/User'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { noavatar } from 'shared/assets'
import { DropDown, Image } from 'shared/ui'

export const LoginDropDown: FC = () => {
    const userAvatar = useAppSelector(getUserAvatar)
    const { t } = useTranslation('menu')

    const items = [
        {
            id: 'admin',
            content: t('Админ'),
            href: '/'
        },
        {
            id: 'settings',
            content: t('Настройки'),
            href: '/'
        },
        {
            id: 'profile',
            content: t('Профиль'),
            href: '/'
        },
        {
            id: 'out',
            content: t('Выйти'),
            onClick: undefined
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
