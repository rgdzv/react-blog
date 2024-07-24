import { lazy } from 'react'

export const ArticleDetailsPageLazy = lazy(
    async () => await import('../ArticleDetailsPage/ArticleDetailsPage')
)
