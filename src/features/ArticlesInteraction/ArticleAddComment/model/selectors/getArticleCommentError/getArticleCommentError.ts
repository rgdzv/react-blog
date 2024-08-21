import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentError = (state: StateSchema): string => {
    return state?.articleComments?.error ?? ''
}
