import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider'
import type { Decorator } from '@storybook/react'

const store = createReduxStore()

export const StoreDecorator: Decorator = (Story) => {
    return (
        <Provider store={store}>
            <Story />
        </Provider>
    )
}
