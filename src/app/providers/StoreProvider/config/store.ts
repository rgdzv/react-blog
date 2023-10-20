import {
    type AnyAction,
    type ThunkMiddleware,
    configureStore,
    type ReducersMapObject,
    type CombinedState,
    type EmptyObject,
    type MiddlewareArray
} from '@reduxjs/toolkit'
import { type ThunkExtraArg, type StateSchema } from '../types/StateSchema'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { loginReducer } from 'features/Authorization'
import { axiosAPI } from 'shared/api'

export function createReduxStore(
    initialState?: StateSchema
): ToolkitStore<
    EmptyObject & StateSchema,
    AnyAction,
    MiddlewareArray<
        [ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ThunkExtraArg>]
    >
> {
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

    store.reducerManager = reducerManager

    return store
}
