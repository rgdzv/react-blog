import { useAppSelector } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'entities_/User'
import { type ReactElement } from 'react'
import { ArticleIcon, HomeIcon, InfoIcon, ProfileIcon } from 'shared/assets'

interface Link {
    to: string
    name: string
    file: string
    icon: ReactElement
}

export const useAppLinks = (): Link[] => {
    const userData = useAppSelector(getUserAuthData)
    const links: Link[] = [
        {
            to: '/',
            name: 'Главная',
            file: 'main',
            icon: <HomeIcon data-testid='home-icon' />
        },
        {
            to: '/about',
            name: 'О сайте',
            file: 'about',
            icon: <InfoIcon data-testid='info-icon' />
        }
    ]

    if (userData !== undefined) {
        links.push(
            {
                to: `/profile/${userData?.id}`,
                name: 'Профиль',
                file: 'profile',
                icon: <ProfileIcon data-testid='profile-icon' />
            },
            {
                to: `/articles`,
                name: 'Статьи',
                file: 'article',
                icon: <ArticleIcon data-testid='article-icon' />
            }
        )
    }

    return links
}
