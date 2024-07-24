import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ThunkExtraArg, type StateSchema } from '../types/StateSchema'
import { createReducerManager } from './reducerManager'
import { loginReducer } from 'features/Authorization'
import { axiosAPI } from 'shared/api'
import { uiReducer } from 'features/UI'
import { userReducer } from 'features/Authorization/model/slice/userSlice/userSlice'

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
