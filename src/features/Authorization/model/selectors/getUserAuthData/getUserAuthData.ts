import type { StateSchema } from 'app/providers/StoreProvider'
import type { User } from 'entities_/User'

export const getUserAuthData = (state: StateSchema): User => {
    return state.user?.authData as User
}
