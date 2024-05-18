import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageSearch = (state: StateSchema): string => {
    return state.articles?.search ?? ''
}
