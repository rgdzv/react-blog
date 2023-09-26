import {
    type AnyAction,
    type Dispatch,
    type ThunkDispatch
} from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'

export type RootState = StateSchema
export type AppDispatch = ThunkDispatch<StateSchema, undefined, AnyAction> &
    Dispatch<AnyAction>
