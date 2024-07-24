import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortOrder } from 'entities_/Article'

export const getArticlesOrder = (state: StateSchema): ArticleSortOrder => {
    return state.articles?.order ?? ArticleSortOrder.ASC
}
