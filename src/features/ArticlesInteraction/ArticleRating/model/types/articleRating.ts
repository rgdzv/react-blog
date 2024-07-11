export interface ArticleRating {
    userId: string
    articleId: string
    rate: number
    id: string
}

export type ArticleRatingGetParams = Omit<ArticleRating, 'id' | 'rate'>
