import {
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
    type StoreEnhancer
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleCommentSchema } from 'features/ArticlesInteraction/ArticleAddComment'
import { type ArticleRatingSchema } from 'features/ArticlesInteraction/ArticleRating'
import { type LoginSchema, type UserSchema } from 'features/Authorization'
import { type ProfileSchema } from 'features/ProfileEditing'
import { type UISchema } from 'features/UI'
import { type ArticleDetailsSchema } from 'pages/ArticleDetailsPage'
import { type ArticlesSchema } from 'pages/ArticlesPage'

export interface StateSchema {
    loginForm: LoginSchema
    user: UserSchema
    profile?: ProfileSchema
    articles?: ArticlesSchema
    ui: UISchema
    articleDetails?: ArticleDetailsSchema
    articleRating?: ArticleRatingSchema
    articleComments?: ArticleCommentSchema
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
