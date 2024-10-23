import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema } from '../types/StateSchema'

interface StoreProviderPropsInterface {
    children: ReactNode
    initialState?: Partial<StateSchema>
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderPropsInterface> = ({
    children,
    initialState,
    asyncReducers
}) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    )

    return <Provider store={store}>{children}</Provider>
}
