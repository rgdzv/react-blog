import {
    type CombinedState,
    type AnyAction,
    type Reducer,
    type EnhancedStore
} from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/Authorization'

export interface StateSchema {
    loginForm: LoginSchema
    user: UserSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => any
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
