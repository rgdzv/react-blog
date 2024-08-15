import { type FC, type ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { type Reducer } from '@reduxjs/toolkit'
import {
    type StateSchema,
    type StateSchemaKey,
    useAppStore
} from 'app/providers/StoreProvider'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicReducerLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
    children,
    reducers,
    removeAfterUnmount = true
}) => {
    const store = useAppStore()
    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            if (mounted === undefined) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return <>{children}</>
}
