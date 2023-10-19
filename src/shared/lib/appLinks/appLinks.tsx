import { type ReactElement } from 'react'
import { HomeIcon, InfoIcon, ProfileIcon } from '../../assets'

interface Link {
    to: string
    name: string
    file: string
    icon: ReactElement
}

export const links: Link[] = [
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
    },
    {
        to: '/profile',
        name: 'Профиль',
        file: 'profile',
        icon: <ProfileIcon data-testid='profile-icon' />
    }
]
