import type { ArticleCommentType } from 'entities_/ArticleComment'
import type { EntityState } from '@reduxjs/toolkit'

export interface ArticleCommentSchema extends EntityState<ArticleCommentType> {
    isLoading: boolean
    error: string | undefined
    text: string
}
