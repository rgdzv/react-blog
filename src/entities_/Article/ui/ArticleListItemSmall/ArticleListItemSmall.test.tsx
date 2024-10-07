import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { RoutesType } from 'shared/types'
import { ArticleListItemSmall } from './ArticleListItemSmall'

const mockProps = {
    avatar: 'https://test.com/avatar.jpg',
    articleImage: 'https://test.com/article.jpg',
    date: '2023-10-01',
    views: 10,
    textBlock: 'Test text content',
    userName: 'John Doe',
    id: '1',
    articleId: '2'
}

const renderWithProps = (props = mockProps): void => {
    render(
        <MemoryRouter>
            <StoreProvider>
                <ArticleListItemSmall {...props} />
            </StoreProvider>
        </MemoryRouter>
    )
}

describe('ArticleListItemSmall', () => {
    test('should render component', () => {
        renderWithProps()

        const articleListItemSmall = screen.getByTestId(
            'article-list-item-small'
        )
        expect(articleListItemSmall).toBeInTheDocument()
    })

    test('should render user avatar', () => {
        renderWithProps()

        const avatarImage = screen.getByAltText('article avatar')
        expect(avatarImage).toBeInTheDocument()
        expect(avatarImage).toHaveAttribute('src', mockProps.avatar)
    })

    test('should render user name', () => {
        renderWithProps()

        expect(screen.getByText(mockProps.userName)).toBeInTheDocument()
    })

    test('should render creation date', () => {
        renderWithProps()

        expect(screen.getByText(mockProps.date)).toBeInTheDocument()
    })

    test('should render article image', () => {
        renderWithProps()

        const articleImage = screen.getByAltText('article image')
        expect(articleImage).toBeInTheDocument()
        expect(articleImage).toHaveAttribute('src', mockProps.articleImage)
    })

    test('should render article text content', () => {
        renderWithProps()

        expect(screen.getByText(mockProps.textBlock)).toBeInTheDocument()
    })

    test('should render views count', () => {
        renderWithProps()

        expect(screen.getByText(mockProps.views.toString())).toBeInTheDocument()
    })

    test('should render eye icon', () => {
        renderWithProps()

        const eyeIcon = screen.getByTestId('eye-open-icon')
        expect(eyeIcon).toBeInTheDocument()
    })

    test('should have correct profile link', () => {
        renderWithProps()

        const profileLink = screen.getByRole('link', { name: /john doe/i })
        expect(profileLink).toHaveAttribute(
            'href',
            `/${RoutesType.PROFILE}/${mockProps.id}`
        )
    })
})
