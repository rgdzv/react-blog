import { type ArticleRating } from './articleRating'

export interface ArticleRatingSchema {
    data?: ArticleRating
    isLoading: boolean
    error: string | undefined
}
