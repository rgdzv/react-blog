import { type ArticleRating } from './articleRating'

export interface ArticleRatingSchema {
    rating: ArticleRating | undefined
    isLoading: boolean
    error: string | undefined
}
