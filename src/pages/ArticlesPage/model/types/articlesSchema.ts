import { type EntityState } from '@reduxjs/toolkit'
import {
    type Article,
    type ArticleSortField,
    type ArticleSortOrder,
    type ArticleType
} from 'entities_/Article'

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
