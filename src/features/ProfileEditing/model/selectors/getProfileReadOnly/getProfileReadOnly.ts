import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileReadOnly = (state: StateSchema): boolean | undefined => {
    return state.profile?.readOnly
}
