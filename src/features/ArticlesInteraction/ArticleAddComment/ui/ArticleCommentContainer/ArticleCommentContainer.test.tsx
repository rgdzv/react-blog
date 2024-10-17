/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import type { ReducersList } from 'shared/lib'
import { DynamicReducerLoader } from 'shared/lib'
import { articleCommentsReducer } from '../../model/slice/articleCommentSlice'
import { ArticleCommentContainer } from './ArticleCommentContainer'

const reducers: ReducersList = {
    articleComments: articleCommentsReducer
}

describe('ArticleCommentContainer', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <DynamicReducerLoader
                        reducers={reducers}
                        removeAfterUnmount
                    >
                        <ArticleCommentContainer />
                    </DynamicReducerLoader>
                </StoreProvider>
            </MemoryRouter>
        )
        expect(
            screen.getByTestId('article-comment-container')
        ).toBeInTheDocument()
    })
})
