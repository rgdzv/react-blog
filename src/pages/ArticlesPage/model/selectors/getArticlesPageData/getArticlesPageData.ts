import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article } from 'entities_/Article'

export const getArticlesPageData = (state: StateSchema): Article[] => {
    return state.articles?.data as Article[]
}
