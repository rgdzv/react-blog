export interface ArticleRating {
    id: string
    userId: string
    articleId: string
    rate: number
}

export type ArticleRatingParams = Omit<ArticleRating, 'id' | 'rate'>
