import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesHasMore = (state: StateSchema): boolean => {
    return state.articles?.hasMore ?? false
}
