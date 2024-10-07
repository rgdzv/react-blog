import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleBlockType } from '../../model/const/articleDetailsConst'
import { ArticleDetailsBlockImage } from './ArticleDetailsBlockImage'
import type { ArticleImageBlock } from '../../model/types/articleDetails'

const mockBlock: ArticleImageBlock = {
    id: '1',
    type: ArticleBlockType.IMAGE,
    src: 'test-src',
    title: 'test-title'
}

describe('ArticleDetailsBlockImage', () => {
    test('should render component', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockImage block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsImageBlock = screen.getByTestId('image')
        expect(articleDetailsImageBlock).toBeInTheDocument()
    })

    test('should have src and alt attributes', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockImage block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsImageBlock = screen.getByTestId('image')
        const image = screen.getByRole('img')
        expect(articleDetailsImageBlock).toContainElement(image)
        expect(image).toHaveAttribute('src', 'test-src')
        expect(image).toHaveAttribute('alt', 'test-title')
    })
})
