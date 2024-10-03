import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import ArticleDetailsPage from './ArticleDetailsPage'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: '1' })
}))

describe('ArticleDetailsPage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsPage />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsPage = screen.getByTestId('articles-page-details')
        expect(articleDetailsPage).toBeInTheDocument()
    })
})
