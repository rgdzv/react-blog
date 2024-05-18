import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from 'entities_/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean
    error?: string
    page: number
    hasMore: boolean
    limit: number
    view: string
    inited: boolean
    search: string
}
