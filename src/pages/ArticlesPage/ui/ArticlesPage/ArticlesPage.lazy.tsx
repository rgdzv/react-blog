import { lazy } from 'react'

export const ArticlesPageLazy = lazy(async () => await import('./ArticlesPage'))
