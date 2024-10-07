import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleBlockType } from '../../model/const/articleDetailsConst'
import { ArticleDetailsBlockText } from './ArticleDetailsBlockText'
import type { ArticleTextBlock } from '../../model/types/articleDetails'

const mockBlock: ArticleTextBlock = {
    id: '1',
    type: ArticleBlockType.TEXT,
    title: 'test-title',
    paragraph: 'test-paragraph'
}

describe('ArticleDetailsBlockText', () => {
    test('should render component', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockText block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsTextBlock = screen.getByTestId('article-block-text')
        expect(articleDetailsTextBlock).toBeInTheDocument()
    })

    test('should render title and paragraph', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockText block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByText('test-title')).toBeInTheDocument()
        expect(screen.getByText('test-paragraph')).toBeInTheDocument()
    })
})
