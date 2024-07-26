import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleRatingType } from 'entities_/ArticleRating'

export const getArticleRatingData = (state: StateSchema): ArticleRatingType => {
    return state?.articleRating?.data as ArticleRatingType
}
