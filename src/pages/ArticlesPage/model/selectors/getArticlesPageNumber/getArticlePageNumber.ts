import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageNumber = (state: StateSchema): number => {
    return state.articles?.page ?? 1
}
