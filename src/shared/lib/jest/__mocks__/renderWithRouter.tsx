import {
    RouterProvider,
    type RouterProviderProps,
    createMemoryRouter
} from 'react-router-dom'
import { render } from '@testing-library/react'
import { routes } from 'app/providers/RouterProvider'

export const renderWithRouter = (path = '/'): RouterProviderProps => {
    const router = createMemoryRouter(routes, {
        initialEntries: [path]
    })

    render(<RouterProvider router={router} />)

    return { router }
}
