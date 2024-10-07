import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleBlockType } from '../../model/const/articleDetailsConst'
import { ArticleDetailsBlockCode } from './ArticleDetailsBlockCode'
import type { ArticleCodeBlock } from '../../model/types/articleDetails'

const mockBlock: ArticleCodeBlock = {
    id: '1',
    type: ArticleBlockType.CODE,
    code: '<div>Test</div>'
}

describe('ArticleDetailsBlockCode', () => {
    test('should render component', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockCode block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleDetailsCodeBlock = screen.getByTestId('article-block-code')
        expect(articleDetailsCodeBlock).toBeInTheDocument()
    })

    test('should render code', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockCode block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByRole('code')).toBeInTheDocument()
    })

    test('should copy code', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleDetailsBlockCode block={mockBlock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const copyIcon = screen.getByTestId('copy-icon')
        expect(copyIcon).toBeInTheDocument()

        await user.click(copyIcon)

        const clipboardText = await navigator.clipboard.readText()
        expect(clipboardText).toBe('<div>Test</div>')
    })
})
