import type { StateSchema } from 'app/providers/StoreProvider'

export const getProfileDataAvatar = (state: StateSchema): string => {
    return state.profile?.data?.avatar ?? ''
}
