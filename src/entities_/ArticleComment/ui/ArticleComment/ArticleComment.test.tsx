import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { RoutesType } from 'shared/types'
import { ArticleComment } from './ArticleComment'

const mockProps = {
    avatar: 'https://test.com/avatar.jpg',
    text: 'Test text content',
    userId: '1',
    icon: React.createElement('svg', { 'data-testid': 'test-icon' })
}

const renderWithProps = (props = mockProps): void => {
    render(
        <MemoryRouter>
            <StoreProvider>
                <ArticleComment {...props} />
            </StoreProvider>
        </MemoryRouter>
    )
}

describe('ArticleComment', () => {
    test('should render component', () => {
        renderWithProps()

        const articleComment = screen.getByTestId('article-comment')
        expect(articleComment).toBeInTheDocument()
    })

    test('should render user avatar', () => {
        renderWithProps()

        const avatarImage = screen.getByAltText('article comment avatar')
        expect(avatarImage).toBeInTheDocument()
        expect(avatarImage).toHaveAttribute('src', mockProps.avatar)
    })

    test('should render article comment text content', () => {
        renderWithProps()

        expect(screen.getByText(mockProps.text)).toBeInTheDocument()
    })

    test('should render icon', () => {
        renderWithProps()
        screen.debug()
        const testIcon = screen.getByTestId('test-icon')
        expect(testIcon).toBeInTheDocument()
    })

    test('should have correct profile link', () => {
        renderWithProps()

        const profileLink = screen.getByRole('link')
        expect(profileLink).toHaveAttribute(
            'href',
            `/${RoutesType.PROFILE}/${mockProps.userId}`
        )
    })
})
