import {
    type CombinedState,
    type Reducer,
    type StoreEnhancer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type UserSchema } from 'entities_/User'
import { type LoginSchema } from 'features/Authorization'
import { type ProfileSchema } from 'features/ProfileEditing'
import { type UISchema } from 'features/UI'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
    loginForm: LoginSchema
    user: UserSchema
    profile?: ProfileSchema
    articles?: ArticlesPageSchema
    ui: UISchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
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
