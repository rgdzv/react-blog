import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileValidErrors = (
    state: StateSchema
): Record<string, string> => {
    return state.profile?.validationErrors as Record<string, string>
}
