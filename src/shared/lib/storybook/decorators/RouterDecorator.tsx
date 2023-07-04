import { type Decorator } from '@storybook/react'
import { router } from 'app/providers/RouterProvider'
import { RouterProvider } from 'react-router-dom'

export const RouterDecorator: Decorator = (Story) => {
    return (
        <RouterProvider router={router}>
            <Story />
        </RouterProvider>
    )
}
