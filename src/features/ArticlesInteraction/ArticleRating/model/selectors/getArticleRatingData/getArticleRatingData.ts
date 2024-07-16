import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleRating } from '../../types/articleRating'

export const getArticleRatingData = (state: StateSchema): ArticleRating => {
    return state?.articleRating?.data as ArticleRating
}
