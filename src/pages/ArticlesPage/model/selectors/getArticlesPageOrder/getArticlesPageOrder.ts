import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortOrder } from 'entities_/Article'

export const getArticlesPageOrder = (state: StateSchema): ArticleSortOrder => {
    return state.articles?.order ?? ArticleSortOrder.ASC
}
