import { lazy } from 'react'

export const ArticleRatingLazy = lazy(
    async () => await import('./ArticleRating')
)
