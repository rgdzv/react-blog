import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import ArticlesPage from './ArticlesPage'

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
