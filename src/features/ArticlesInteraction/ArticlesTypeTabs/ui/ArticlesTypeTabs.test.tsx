import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities_/Article'
import { ArticlesTypeTabs } from './ArticlesTypeTabs'

export const typeTabs = [
    {
        value: ArticleType.ALL,
        content: 'Все статьи'
    },
    {
        value: ArticleType.IT,
        content: 'Айти'
    },
    {
        value: ArticleType.ECONOMICS,
        content: 'Экономика'
    },
    {
        value: ArticleType.SCIENCE,
        content: 'Наука'
    }
]

describe('ArticlesTypeTabs', () => {
    const onChangeTypeMock = jest.fn()

    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesTypeTabs
                        type={ArticleType.ALL}
                        dataTestId={'articles-type-tabs'}
                        onChangeType={onChangeTypeMock}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        const articlesTypeTabs = screen.getByTestId('articles-type-tabs')
        expect(articlesTypeTabs).toBeInTheDocument()

        typeTabs.forEach((tab) => {
            expect(
                screen.getByRole('button', { name: tab.content })
            ).toBeInTheDocument()
        })
    })

    test('calls onChangeType with the correct value when a tab is clicked', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesTypeTabs
                        type={ArticleType.ALL}
                        dataTestId={'articles-type-tabs'}
                        onChangeType={onChangeTypeMock}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        await user.click(screen.getByRole('button', { name: 'Айти' }))

        expect(onChangeTypeMock).toHaveBeenCalledWith('IT')
    })

    test('applies the selected class to the active tab', async () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticlesTypeTabs
                        type={ArticleType.ALL}
                        dataTestId={'articles-type-tabs'}
                        onChangeType={onChangeTypeMock}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        const all = screen.getByRole('button', { name: 'Все статьи' })
        expect(all).toHaveClass('selected')
    })
})
