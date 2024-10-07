import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { RoutesType } from 'shared/types'
import { ArticleListItem } from './ArticleListItem'

const mockProps = {
    avatar: 'https://test.com/avatar.jpg',
    articleImage: 'https://test.com/article.jpg',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    date: '2023-10-01',
    views: 10,
    buttonName: 'Read More',
    textBlock: 'Test text content',
    userName: 'John Doe',
    id: '1',
    articleId: '2'
}

const renderWithProps = (props = mockProps): void => {
    render(
        <MemoryRouter>
            <StoreProvider>
                <ArticleListItem {...props} />
            </StoreProvider>
        </MemoryRouter>
    )
}

describe('ArticleListItem', () => {
    test('should render component', () => {
        renderWithProps()

        const articleListItem = screen.getByTestId('article-list-item')
        expect(articleListItem).toBeInTheDocument()
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

    test('should render article title and subtitle', () => {
        renderWithProps()

        expect(screen.getByText(mockProps.title)).toBeInTheDocument()
        expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument()
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

    test('should render button with correct name', () => {
        renderWithProps()

        const button = screen.getByRole('button', {
            name: mockProps.buttonName
        })
        expect(button).toBeInTheDocument()
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

    test('should have correct article link', () => {
        renderWithProps()

        const articleLink = screen.getByRole('link', { name: /read more/i })
        expect(articleLink).toHaveAttribute(
            'href',
            `/${RoutesType.ARTICLES}/${mockProps.articleId}`
        )
    })
})
