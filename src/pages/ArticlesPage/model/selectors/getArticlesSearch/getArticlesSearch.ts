import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesSearch = (state: StateSchema): string => {
    return state.articles?.search ?? ''
}
