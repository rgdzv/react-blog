import { type ReactElement } from 'react'
import { InfoLight, HomeLight, HomeDark, InfoDark } from '../../assets'

interface Link {
    to: string
    name: string
    file: string
    icon: {
        light: ReactElement
        dark: ReactElement
    }
}

export const links: Link[] = [
    {
        to: '/',
        name: 'Главная',
        file: 'main',
        icon: {
            light: <HomeLight data-testid='home-light'/>,
            dark: <HomeDark data-testid='home-dark'/>
        }
    },
    {
        to: '/about',
        name: 'О сайте',
        file: 'about',
        icon: {
            light: <InfoLight data-testid='info-light'/>,
            dark: <InfoDark data-testid='info-dark'/>
        }
    }
]
