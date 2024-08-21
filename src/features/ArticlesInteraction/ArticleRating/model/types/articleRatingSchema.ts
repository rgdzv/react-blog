import type { ArticleRatingType } from 'entities_/ArticleRating'

export interface ArticleRatingSchema {
    data?: ArticleRatingType
    isLoading: boolean
    error: string | undefined
}
