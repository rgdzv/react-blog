import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleRating } from 'entities_/ArticleRating'

export const getArticleRatingData = (state: StateSchema): ArticleRating => {
    return state?.articleRating?.data as ArticleRating
}
