import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentIsLoading = (state: StateSchema): boolean => {
    return state?.articleComments?.isLoading ?? false
}
