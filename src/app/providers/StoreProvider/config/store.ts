import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ThunkExtraArg, type StateSchema } from '../types/StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { loginReducer } from 'features/Authorization'
import { axiosAPI } from 'shared/api'

export function createReduxStore(initialState?: StateSchema) { // eslint-disable-line
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer
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
