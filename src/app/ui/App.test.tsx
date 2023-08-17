import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from 'shared/lib'

describe('App', () => {
    test('navigating to other routes', async () => {
        const { router } = renderWithRouter()
        expect(await screen.findByTestId('main-page')).toBeInTheDocument()
        expect(router.state.location.pathname).toEqual('/')
        const aboutLink = screen.getByTestId('about')
        await userEvent.click(aboutLink)
        expect(await screen.findByTestId('about-page')).toBeInTheDocument()
        expect(router.state.location.pathname).toEqual('/about')
        expect(screen.queryByTestId('main-page')).not.toBeInTheDocument()
    })

    test('navigating to non existing route', async () => {
        renderWithRouter('/nonexisting')
        expect(await screen.findByTestId('not-found-page')).toBeInTheDocument()
    })
})
