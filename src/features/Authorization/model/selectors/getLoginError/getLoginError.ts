import type { StateSchema } from 'app/providers/StoreProvider'

export const getLoginError = (state: StateSchema): string => {
    return state?.loginForm?.error ?? ''
}
