import { lazy } from 'react'

export const ArticleAddCommentLazy = lazy(
    async () => await import('./ArticleAddComment')
)
