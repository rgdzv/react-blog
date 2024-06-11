import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageLimit = (state: StateSchema): number => {
    return state.articles?.limit ?? 4
}
