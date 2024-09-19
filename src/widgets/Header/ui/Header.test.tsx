import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { Header } from './Header'

describe('Header', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <Header />
                </StoreProvider>
            </MemoryRouter>
        )
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
})
