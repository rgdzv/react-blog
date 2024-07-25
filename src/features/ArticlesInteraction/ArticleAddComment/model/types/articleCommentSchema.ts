import { type ArticleCommentType } from 'entities_/ArticleComment'

export interface ArticleCommentSchema {
    data?: ArticleCommentType[]
    isLoading: boolean
    error: string | undefined
    text: string
}
