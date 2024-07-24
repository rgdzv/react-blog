import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsError = (state: StateSchema): string =>
    state.articleDetails?.error ?? ''
