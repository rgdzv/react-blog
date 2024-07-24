import { type ArticleComment } from 'entities_/ArticleComment'

export interface ArticleCommentSchema {
    data?: ArticleComment[]
    isLoading: boolean
    error: string | undefined
    text: string
}
