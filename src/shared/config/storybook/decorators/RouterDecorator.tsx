import { type Decorator } from '@storybook/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (Story) => {
    const router = createMemoryRouter([
        {
            path: '/*',
            element: <Story />
        }
    ])
    return <RouterProvider router={router} />
}
