import type { StateSchema } from 'app/providers/StoreProvider'
import type { JsonSettings } from 'entities_/User'

export const getUserJsonSettings = (state: StateSchema): JsonSettings => {
    return state.user?.authData?.jsonSettings as JsonSettings
}
