import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticleRatingError = (state: StateSchema): string =>
    state.articleRating?.error ?? ''
