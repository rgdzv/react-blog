import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageIsLoading = (state: StateSchema): boolean => {
    return state.articles?.isLoading ?? false
}
