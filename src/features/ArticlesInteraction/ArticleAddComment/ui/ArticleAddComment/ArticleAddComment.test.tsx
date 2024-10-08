import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import type { ReducersList } from 'shared/lib'
import { DynamicReducerLoader } from 'shared/lib'
import { articleCommentsReducer } from '../../model/slice/articleCommentSlice'
import { ArticleAddComment } from './ArticleAddComment'

const reducers: ReducersList = {
    articleComments: articleCommentsReducer
}

describe('ArticleAddComment', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ArticleAddComment />
                </StoreProvider>
            </MemoryRouter>
        )

        const articleAddComment = screen.getByTestId('article-add-comment')
        const input = screen.getByRole('textbox')
        const button = screen.getByRole('button')
        expect(articleAddComment).toBeInTheDocument()
        expect(articleAddComment).toContainElement(input)
        expect(articleAddComment).toContainElement(button)
    })

    test('input value is changed', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <DynamicReducerLoader
                        reducers={reducers}
                        removeAfterUnmount
                    >
                        <ArticleAddComment />
                    </DynamicReducerLoader>
                </StoreProvider>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input).toHaveValue('')

        await user.type(input, 'New comment')

        expect(input).toHaveValue('New comment')
    })

    test('button should be disabled when input is empty and enabled when it is not', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <DynamicReducerLoader
                        reducers={reducers}
                        removeAfterUnmount
                    >
                        <ArticleAddComment />
                    </DynamicReducerLoader>
                </StoreProvider>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()

        await user.type(input, 'New comment')

        expect(button).toBeEnabled()
    })
})
