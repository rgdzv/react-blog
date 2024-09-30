import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import MainPage from './MainPage'

describe('MainPage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <MainPage />
                </StoreProvider>
            </MemoryRouter>
        )

        const mainPage = screen.getByTestId('main-page')
        expect(mainPage).toBeInTheDocument()
    })
})
