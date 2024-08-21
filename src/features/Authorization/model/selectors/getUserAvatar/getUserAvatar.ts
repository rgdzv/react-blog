import type { StateSchema } from 'app/providers/StoreProvider'

export const getUserAvatar = (state: StateSchema): string => {
    return state.user.authData?.avatar as string
}
