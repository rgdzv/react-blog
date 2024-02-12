import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageHasMore = (state: StateSchema): boolean => {
    return state.articles?.hasMore ?? false
}
