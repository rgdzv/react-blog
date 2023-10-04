import {
    type AnyAction,
    type ThunkMiddleware,
    configureStore
} from '@reduxjs/toolkit'
import { type StateSchema } from '../types/StateSchema'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { loginReducer } from 'features/Authorization'
import { userReducer } from 'entities/User'

export function createReduxStore(
    initialState?: StateSchema
): ToolkitStore<
    StateSchema,
    AnyAction,
    [ThunkMiddleware<StateSchema, AnyAction>]
> {
    const store = configureStore<StateSchema>({
        reducer: {
            loginForm: loginReducer,
            user: userReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    return store
}
