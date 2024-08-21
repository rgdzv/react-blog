import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesNumber = (state: StateSchema): number => {
    return state.articles?.page ?? 1
}
