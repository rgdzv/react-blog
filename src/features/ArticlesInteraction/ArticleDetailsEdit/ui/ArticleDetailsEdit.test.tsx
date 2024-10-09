import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleDetailsEdit } from './ArticleDetailsEdit'

describe('ArticleDetailsEdit', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsEdit canBeEdited={false} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsEdit = screen.getByTestId('article-details-edit')
        expect(articleDetailsEdit).toBeInTheDocument()
    })

    test('button should be disabled', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsEdit canBeEdited={false} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsEdit = screen.getByTestId('article-details-edit')
        const button = screen.getByRole('button')
        expect(articleDetailsEdit).toBeInTheDocument()
        expect(articleDetailsEdit).toContainElement(button)
        expect(button).toBeDisabled()
    })

    test('button should be enabled', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsEdit canBeEdited={true} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsEdit = screen.getByTestId('article-details-edit')
        const button = screen.getByRole('button')
        expect(articleDetailsEdit).toBeInTheDocument()
        expect(articleDetailsEdit).toContainElement(button)
        expect(button).toBeEnabled()
    })
})
