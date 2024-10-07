import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { RoutesType } from 'shared/types'
import { ArticleDetails } from './ArticleDetails'

const mockProps = {
    profileId: '1',
    avatar: 'https://test.com/avatar.jpg',
    articleImage: 'https://test.com/article.jpg',
    userName: 'John Doe',
    date: '2023-10-01',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    contentBlock: [
        React.createElement('pre', {
            'data-testid': 'test-code-block',
            key: 'test-code-block'
        }),
        React.createElement('img', {
            'data-testid': 'test-img-block',
            key: 'test-img-block'
        }),
        React.createElement('div', {
            'data-testid': 'test-text-block',
            key: 'test-text-block'
        })
    ]
}

const renderWithProps = (props = mockProps): void => {
    render(
        <MemoryRouter>
            <StoreProvider>
                <ArticleDetails {...props} />
            </StoreProvider>
        </MemoryRouter>
    )
}

describe('ArticleDetails', () => {
    test('should render component', () => {
        renderWithProps()

        const articleDetails = screen.getByTestId('article-details')
        expect(articleDetails).toBeInTheDocument()
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

    test('should have correct profile link', () => {
        renderWithProps()

        const profileLink = screen.getByRole('link')
        expect(profileLink).toHaveAttribute(
            'href',
            `/${RoutesType.PROFILE}/${mockProps.profileId}`
        )
    })

    test('should have content block', () => {
        renderWithProps()

        const codeBlock = screen.getByTestId('test-code-block')
        const imgBlock = screen.getByTestId('test-img-block')
        const textBlock = screen.getByTestId('test-text-block')

        expect(codeBlock).toBeInTheDocument()
        expect(imgBlock).toBeInTheDocument()
        expect(textBlock).toBeInTheDocument()
    })
})
