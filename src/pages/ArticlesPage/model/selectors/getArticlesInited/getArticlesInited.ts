import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesInited = (state: StateSchema): boolean => {
    return state.articles?.inited ?? false
}
