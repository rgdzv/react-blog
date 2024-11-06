import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import ArticlesPage from './ArticlesPage'

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

describe('ArticlesPage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesPage />
                </StoreProvider>
            </MemoryRouter>
        )

        const articlesPage = screen.getByTestId('articles-page')
        expect(articlesPage).toBeInTheDocument()
    })
})
