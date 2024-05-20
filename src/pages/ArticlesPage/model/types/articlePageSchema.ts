import { type EntityState } from '@reduxjs/toolkit'
import {
    type ArticleType,
    type Article,
    type ArticleSortField,
    type ArticleSortOrder
} from 'entities_/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
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
}
