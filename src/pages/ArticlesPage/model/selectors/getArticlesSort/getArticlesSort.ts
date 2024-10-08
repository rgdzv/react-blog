import type { StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField } from 'entities_/Article'

export const getArticlesSort = (state: StateSchema): ArticleSortField => {
    return state.articles?.sort ?? ArticleSortField.CREATED
}
