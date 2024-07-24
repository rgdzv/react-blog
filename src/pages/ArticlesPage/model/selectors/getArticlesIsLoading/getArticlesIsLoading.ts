import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesIsLoading = (state: StateSchema): boolean => {
    return state.articles?.isLoading ?? false
}
