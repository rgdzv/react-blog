import {
    type AnyAction,
    type Reducer,
    combineReducers,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import {
    type ReducerManager,
    type StateSchema,
    type StateSchemaKey
} from '../types/StateSchema'

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key] // eslint-disable-line @typescript-eslint/no-dynamic-delete
                }
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (key === undefined || reducers[key] !== undefined) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (key === undefined || reducers[key] === undefined) {
                return
            }
            delete reducers[key] // eslint-disable-line @typescript-eslint/no-dynamic-delete
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
