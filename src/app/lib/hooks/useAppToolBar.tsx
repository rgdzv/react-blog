import type { ReactElement } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ScrollToolBar } from 'widgets/ScrollToolBar'
import { RoutesType } from 'shared/types'

export function useAppToolBar(): ReactElement {
    const { pathname } = useLocation()
    const { id } = useParams()

    const articlesRoute = `/${RoutesType.ARTICLES}`
    const articlesDetailsRoute = `/${RoutesType.ARTICLES}/${id as string}`

    const toolbarByAppRoute: Record<string, ReactElement> = {
        [articlesRoute]: <ScrollToolBar />,
        [articlesDetailsRoute]: <ScrollToolBar />
    }

    return toolbarByAppRoute[pathname]
}
