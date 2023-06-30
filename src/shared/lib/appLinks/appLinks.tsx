import { type ReactElement } from 'react'
import { InfoLight, HomeLight, HomeDark, InfoDark } from 'shared/assets'

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
            light: <HomeLight />,
            dark: <HomeDark />
        }
    },
    {
        to: '/about',
        name: 'О сайте',
        file: 'about',
        icon: {
            light: <InfoLight />,
            dark: <InfoDark />
        }
    }
]
