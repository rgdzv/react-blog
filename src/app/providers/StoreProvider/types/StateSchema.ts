import {
    type CombinedState,
    type Reducer,
    type StoreEnhancer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/Authorization'
import { type ProfileSchema } from 'features/ProfileEditing'

export interface StateSchema {
    loginForm: LoginSchema
    user: UserSchema
    profile?: ProfileSchema
}

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    getMountedReducers: () => MountedReducers
    reduce: Reducer<CombinedState<StateSchema>>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    enhancer: StoreEnhancer<{ reducerManager: ReducerManager }>
}

export interface ThunkExtraArg {
    axiosAPI: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
