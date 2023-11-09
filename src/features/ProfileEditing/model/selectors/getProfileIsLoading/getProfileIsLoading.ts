import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileIsLoading = (state: StateSchema): boolean => {
    return state.profile?.isLoading ?? false
}
