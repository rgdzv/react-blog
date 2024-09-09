import { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppStore } from 'app/providers/StoreProvider'
import type { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider'
import type { Reducer } from '@reduxjs/toolkit'

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
    const dispatch = useAppDispatch()

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
