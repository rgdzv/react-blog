import { type Article } from 'entities_/Article'

export interface ArticlesPageSchema {
    data?: Article[]
    isLoading: boolean
    error?: string
    page: number
    hasMore: boolean
    limit: number
}
