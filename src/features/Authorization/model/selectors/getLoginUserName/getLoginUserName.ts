import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getLoginUserName = (state: StateSchema): string => {
    return state.loginForm?.username ?? ''
}
