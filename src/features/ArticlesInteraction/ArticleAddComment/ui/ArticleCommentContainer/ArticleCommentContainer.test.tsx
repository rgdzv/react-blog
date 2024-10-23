import type { Reducer } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { articleCommentsReducer } from '../../model/slice/articleCommentSlice'
import { ArticleCommentContainer } from './ArticleCommentContainer'
import type { Action } from '@reduxjs/toolkit'
import type { ArticleCommentSchema } from '../../model/types/articleCommentSchema'

const preloadedState = {
    articleComments: {
        text: '',
        error: undefined,
        isLoading: false,
        ids: ['1'],
        entities: {
            '1': {
                id: '1',
                articleId: '2',
                text: 'Hello world!',
                userId: '1',
                user: {
                    id: '1',
                    username: 'testName'
                }
            }
        }
    },
    user: {
        authData: {
            id: '1',
            username: 'testName'
        },
        initiated: false
    }
}

const reducersMock = {
    articleComments: articleCommentsReducer as Reducer<
        ArticleCommentSchema | undefined,
        Action<any>
    >
}

describe('ArticleCommentContainer', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleCommentContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByTestId('article-comment-container')
        ).toBeInTheDocument()
        expect(
            screen.getByAltText('article comment avatar')
        ).toBeInTheDocument()
        expect(screen.getByText('Hello world!')).toBeInTheDocument()
        expect(screen.getByTestId('delete-comment-icon')).toBeInTheDocument()
    })

    test('should render skeleton when isLoading is true', () => {
        const modifiedState = {
            ...preloadedState,
            articleComments: {
                ...preloadedState.articleComments,
                isLoading: true
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleCommentContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByTestId('article-comment-skeleton')
        ).toBeInTheDocument()
    })

    test('should render error message', () => {
        const modifiedState = {
            ...preloadedState,
            articleComments: {
                ...preloadedState.articleComments,
                error: 'No comments found'
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleCommentContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByText('Ошибка при загрузке комментариев!')
        ).toBeInTheDocument()
    })

    test('should delete comment after clicking delete button', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleCommentContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByText('Hello world!')).toBeInTheDocument()

        await user.click(screen.getByTestId('delete-comment-icon'))

        expect(screen.queryByText('Hello world!')).not.toBeInTheDocument()
    })
})
