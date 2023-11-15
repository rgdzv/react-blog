import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileReadOnly = (state: StateSchema): boolean => {
    return state.profile?.readOnly ?? false
}
