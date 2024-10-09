import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleSortOrder } from 'entities_/Article'
import { ArticlesSortSelector } from './ArticlesSortSelector'

const mockProps = {
    sort: ArticleSortField.CREATED,
    onChangeSort: jest.fn(),
    order: ArticleSortOrder.ASC,
    onChangeOrder: jest.fn(),
    dataTestId: 'article-sort-selector'
}

describe('ArticlesSortSelector', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesSortSelector {...mockProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articlesSortSelector = screen.getByTestId('article-sort-selector')
        expect(articlesSortSelector).toBeInTheDocument()
    })
})
