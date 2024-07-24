import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesError = (state: StateSchema): string => {
    return state.articles?.error ?? ''
}
