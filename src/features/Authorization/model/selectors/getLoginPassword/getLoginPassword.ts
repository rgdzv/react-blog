import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getLoginPassword = (state: StateSchema): string => {
    return state.loginForm?.password ?? ''
}
