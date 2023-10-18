import {
    type AnyAction,
    type ThunkMiddleware,
    configureStore,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type StateSchema } from '../types/StateSchema'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { loginReducer } from 'features/Authorization'

export function createReduxStore(
    initialState?: StateSchema
): ToolkitStore<
    StateSchema,
    AnyAction,
    [ThunkMiddleware<StateSchema, AnyAction>]
> {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-expect-error no such property in store
    store.reducerManager = reducerManager

    return store
}
