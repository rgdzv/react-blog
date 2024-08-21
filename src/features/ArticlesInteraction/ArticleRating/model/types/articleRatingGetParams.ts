import type { ArticleRatingType } from 'entities_/ArticleRating'

export type ArticleRatingGetParams = Omit<ArticleRatingType, 'id' | 'rate'>
