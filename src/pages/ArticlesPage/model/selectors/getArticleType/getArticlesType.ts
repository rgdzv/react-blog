import { ArticleType } from 'entities_/Article'
import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesType = (state: StateSchema): ArticleType => {
    return state.articles?.type ?? ArticleType.ALL
}
