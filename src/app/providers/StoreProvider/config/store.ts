import { configureStore } from '@reduxjs/toolkit'
import { loginReducer, userReducer } from 'features/Authorization'
import { uiReducer } from 'features/UI'
import { axiosAPI } from 'shared/api'
import { createReducerManager } from './reducerManager'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema, ThunkExtraArg } from '../types/StateSchema'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        ui: uiReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        axiosAPI
    }

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                }
            }),
        enhancers: [reducerManager.enhancer]
    })

    return store
}
