import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleRating } from './ArticleRating'

const mockProps = {
    ratingSign: '1',
    rate: 3,
    handleRatingUpdate: () => {}
}

describe('ArticleRating', () => {
    test('should render component', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleRating {...mockProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleRating = screen.getByTestId('article-rating')
        expect(articleRating).toBeInTheDocument()
    })

    test('should render rating sign', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleRating {...mockProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        const ratingSign = screen.getByText(mockProps.ratingSign)
        expect(ratingSign).toBeInTheDocument()
    })
})
