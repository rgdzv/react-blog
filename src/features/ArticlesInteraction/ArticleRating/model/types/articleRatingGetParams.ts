import { type ArticleRating } from 'entities_/ArticleRating'

export type ArticleRatingGetParams = Omit<ArticleRating, 'id' | 'rate'>
