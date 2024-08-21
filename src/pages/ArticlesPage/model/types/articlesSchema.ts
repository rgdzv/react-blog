import type {
    Article,
    ArticleSortField,
    ArticleSortOrder,
    ArticleType
} from 'entities_/Article'
import type { EntityState } from '@reduxjs/toolkit'

export interface ArticlesSchema extends EntityState<Article> {
    isLoading: boolean
    error?: string
    page: number
    hasMore: boolean
    limit: number
    view: string
    inited: boolean
    search: string
    type: ArticleType
    sort: ArticleSortField
    order: ArticleSortOrder
    totalCount: number
}
