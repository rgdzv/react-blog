import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleSortOrder } from 'entities_/Article'
import { ArticlesSortSelector } from './ArticlesSortSelector'

const mockOnChangeSort = jest.fn()
const mockOnChangeOrder = jest.fn()

const mockProps = {
    sort: ArticleSortField.CREATED,
    onChangeSort: mockOnChangeSort,
    order: ArticleSortOrder.ASC,
    onChangeOrder: mockOnChangeOrder,
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

    test('calls onChangeSort when a new sort option is selected', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesSortSelector {...mockProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        await user.click(screen.getByRole('button', { name: 'created' }))
        await user.click(screen.getByRole('option', { name: 'title' }))

        expect(mockOnChangeSort).toHaveBeenCalledWith('title')
    })

    test('calls onChangeOrder when a new order option is selected', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesSortSelector {...mockProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        await user.click(screen.getByRole('button', { name: 'asc' }))
        await user.click(screen.getByRole('option', { name: 'desc' }))

        expect(mockOnChangeOrder).toHaveBeenCalledWith('desc')
    })
})
