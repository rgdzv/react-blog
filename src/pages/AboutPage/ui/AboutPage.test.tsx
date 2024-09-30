import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import AboutPage from './AboutPage'

describe('AboutPage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <AboutPage />
                </StoreProvider>
            </MemoryRouter>
        )

        const aboutPage = screen.getByTestId('about-page')
        expect(aboutPage).toBeInTheDocument()
    })
})
