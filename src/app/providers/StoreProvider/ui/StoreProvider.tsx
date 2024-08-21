import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import type { StateSchema } from '../types/StateSchema'

interface StoreProviderPropsInterface {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderPropsInterface> = ({
    children,
    initialState
}) => {
    const store = createReduxStore(initialState)

    return <Provider store={store}>{children}</Provider>
}
