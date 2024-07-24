import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities_/Article'

export const getArticlesType = (state: StateSchema): ArticleType => {
    return state.articles?.type ?? ArticleType.ALL
}
