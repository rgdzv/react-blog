import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticleRatingIsLoading = (state: StateSchema): boolean => {
    return state?.articleRating?.isLoading ?? false
}
