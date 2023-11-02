import { type Decorator } from '@storybook/react'
import { createReduxStore } from 'app/providers/StoreProvider'
import { Provider } from 'react-redux'

const store = createReduxStore()

export const StoreDecorator: Decorator = (Story) => {
    return (
        <Provider store={store}>
            <Story />
        </Provider>
    )
}
