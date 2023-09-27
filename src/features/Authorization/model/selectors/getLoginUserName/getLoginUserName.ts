import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginUserName = (state: StateSchema): string => {
    return state.loginForm?.username ?? ''
}
