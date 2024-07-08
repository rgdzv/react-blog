import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleRate = (state: StateSchema): number => {
    return state?.articleRating?.data?.rate ?? 1
}
