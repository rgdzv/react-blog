import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginPassword = (state: StateSchema): string => {
    return state.loginForm?.password ?? ''
}
