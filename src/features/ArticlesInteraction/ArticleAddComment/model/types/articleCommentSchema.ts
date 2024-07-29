import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleCommentType } from 'entities_/ArticleComment'

export interface ArticleCommentSchema extends EntityState<ArticleCommentType> {
    isLoading: boolean
    error: string | undefined
    text: string
}
