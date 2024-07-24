import { type ArticleRating } from 'entities_/ArticleRating'

export interface ArticleRatingSchema {
    data?: ArticleRating
    isLoading: boolean
    error: string | undefined
}
