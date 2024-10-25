import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { getUserAuthData } from 'features/Authorization'
import { ArticleIcon, HomeIcon, InfoIcon, ProfileIcon } from 'shared/assets'
import { RoutesType } from 'shared/types'
import { useAppSelector } from 'shared/lib'

interface Link {
    to: string
    name: string
    file: string
    icon: ReactElement
}

export const useAppLinks = (): Link[] => {
    const userData = useAppSelector(getUserAuthData)
    const { t } = useTranslation()
    const links: Link[] = [
        {
            to: '/',
            name: 'Главная',
            file: 'main',
            icon: <HomeIcon data-testid='home-icon' title={t('Главная')} />
        },
        {
            to: `/${RoutesType.ABOUT}`,
            name: 'О сайте',
            file: 'about',
            icon: (
                <InfoIcon
                    data-testid='info-icon'
                    title={t('О сайте', { ns: 'about' })}
                />
            )
        }
    ]

    if (userData !== undefined) {
        links.push(
            {
                to: `/${RoutesType.PROFILE}/${userData?.id}`,
                name: 'Профиль',
                file: 'profile',
                icon: (
                    <ProfileIcon
                        data-testid='profile-icon'
                        title={t('Профиль', { ns: 'profile' })}
                    />
                )
            },
            {
                to: `/${RoutesType.ARTICLES}`,
                name: 'Статьи',
                file: 'article',
                icon: (
                    <ArticleIcon
                        data-testid='article-icon'
                        title={t('Статьи', { ns: 'article' })}
                    />
                )
            }
        )
    }

    return links
}
