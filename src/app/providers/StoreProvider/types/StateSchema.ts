import {
    type CombinedState,
    type Reducer,
    type EnhancedStore,
    type StoreEnhancer
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/Authorization'

export interface StateSchema {
    loginForm: LoginSchema
    user: UserSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => any
    reduce: Reducer<CombinedState<StateSchema>>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    enhancer: StoreEnhancer<{ reducerManager: ReducerManager }>
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
export interface ThunkExtraArg {
    axiosAPI: AxiosInstance
}
