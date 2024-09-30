import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import NotFoundPage from './NotFoundPage'

describe('NotFoundPage', () => {
    const routes = [
        {
            path: '/nonexist',
            element: <NotFoundPage />
        }
    ]
    const router = createMemoryRouter(routes, {
        initialEntries: ['/nonexist']
    })

    test('render', () => {
        render(
            <StoreProvider>
                <RouterProvider router={router} />
            </StoreProvider>
        )

        const notFoundPage = screen.getByTestId('not-found-page')
        expect(notFoundPage).toBeInTheDocument()
    })
})
