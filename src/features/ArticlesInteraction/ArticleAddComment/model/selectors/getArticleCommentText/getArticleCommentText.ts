import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentText = (state: StateSchema): string => {
    return state?.articleComments?.text ?? ''
}
