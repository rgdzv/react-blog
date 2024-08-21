import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import type { Decorator } from '@storybook/react'

export const RouterDecorator: Decorator = (Story) => {
    const router = createMemoryRouter([
        {
            path: '/*',
            element: <Story />
        }
    ])
    return <RouterProvider router={router} />
}
