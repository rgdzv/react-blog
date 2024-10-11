import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities_/Article'
import { ListIcon, TileIcon } from 'shared/assets'
import { ArticlesViewChanger } from './ArticlesViewChanger'

export const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: <ListIcon data-testid='list-icon' />,
        className: 'left_bordered'
    },
    {
        view: ArticleView.SMALL,
        icon: <TileIcon data-testid='tile-icon' />,
        className: 'right_bordered'
    }
]

describe('ArticlesViewChanger', () => {
    test('should render component correctly', () => {
        const mockFilterView = ArticleView.BIG

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesViewChanger />
                </StoreProvider>
            </MemoryRouter>
        )

        const articlesViewChanger = screen.getByTestId('articles-view-changer')
        expect(articlesViewChanger).toBeInTheDocument()

        const buttons = screen.getAllByRole('button')
        expect(buttons).toHaveLength(viewTypes.length)

        viewTypes.forEach((item, index) => {
            const button = buttons[index]
            expect(button).toBeInTheDocument()

            if (item.view === mockFilterView) {
                expect(button).toHaveClass('selected')
            }
        })
    })
})
