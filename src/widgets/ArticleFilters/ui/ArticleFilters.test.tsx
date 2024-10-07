import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleFilters } from './ArticleFilters'

describe('ArticleFilters', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleFilters />
                </StoreProvider>
            </MemoryRouter>
        )

        const header = screen.getByTestId('article-filters')
        const filterInput = screen.getByTestId('filter-search-input')
        const filterTabs = screen.getByTestId('filter-tabs')
        const filterSortSelector = screen.getByTestId('filter-sort-selector')
        expect(header).toBeInTheDocument()
        expect(header).toContainElement(filterInput)
        expect(header).toContainElement(filterTabs)
        expect(header).toContainElement(filterSortSelector)
    })
})
