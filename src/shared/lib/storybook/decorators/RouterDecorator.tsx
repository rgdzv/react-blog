import { type Decorator } from '@storybook/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (Story) => {
    const router = createBrowserRouter([
        {
            path: '/*',
            element: <Story />
        }
    ])
    return <RouterProvider router={router} />
}
