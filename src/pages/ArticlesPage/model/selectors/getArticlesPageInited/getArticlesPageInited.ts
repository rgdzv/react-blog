import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageInited = (state: StateSchema): boolean => {
    return state.articles?.inited ?? false
}
