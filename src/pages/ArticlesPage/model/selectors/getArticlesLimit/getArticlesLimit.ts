import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesLimit = (state: StateSchema): number => {
    return state.articles?.limit ?? 4
}
