import type { StateSchema } from 'app/providers/StoreProvider'

export const getUserInitiated = (state: StateSchema): boolean => {
    return state.user?.initiated ?? false
}
