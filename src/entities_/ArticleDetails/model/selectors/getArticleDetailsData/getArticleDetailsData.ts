import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article } from 'entities_/Article'

export const getArticleDetailsData = (state: StateSchema): Article =>
    state.articleDetails?.data as Article
