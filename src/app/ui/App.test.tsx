import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { routes } from '../providers/RouterProvider'
import { StoreProvider } from '../providers/StoreProvider'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
})

describe('App', () => {
    test('navigating to other routes', async () => {
        const user = userEvent.setup()
        const router = createMemoryRouter(routes, {
            initialEntries: ['/']
        })

        render(
            <StoreProvider>
                <RouterProvider router={router} />
            </StoreProvider>
        )

        expect(await screen.findByTestId('main-page')).toBeInTheDocument()
        expect(router.state.location.pathname).toEqual('/')

        const aboutLink = screen.getByTestId('about')
        await user.click(aboutLink)

        expect(await screen.findByTestId('about-page')).toBeInTheDocument()
        expect(router.state.location.pathname).toEqual('/about')
        expect(screen.queryByTestId('main-page')).not.toBeInTheDocument()
    })

    test('navigating to non existing route', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/nonexist']
        })

        render(
            <StoreProvider>
                <RouterProvider router={router} />
            </StoreProvider>
        )

        expect(await screen.findByTestId('not-found-page')).toBeInTheDocument()
    })
})
