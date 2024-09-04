import type { StateSchema } from 'app/providers/StoreProvider'

export const getUserJsonSettingsIsLoading = (state: StateSchema): boolean => {
    return state.user.isLoading ?? false
}
