import type { Reducer } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { articleRatingReducer } from '../../model/slice/articleRatingSlice'
import { ArticleRatingContainer } from './ArticleRatingContainer'
import type { Action } from '@reduxjs/toolkit'
import type { ArticleRatingSchema } from '../../model/types/articleRatingSchema'

const preloadedState = {
    articleRating: {
        data: {
            userId: '1',
            articleId: '1',
            rate: 3,
            id: '1'
        },
        isLoading: false,
        error: undefined
    }
}

const reducersMock = {
    articleRating: articleRatingReducer as Reducer<
        ArticleRatingSchema | undefined,
        Action<any>
    >
}

describe('ArticleRatingContainer', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleRatingContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        const allButtons = screen.getAllByRole('button')
        expect(screen.getByTestId('article-rating')).toBeInTheDocument()
        expect(allButtons.length).toEqual(5)
    })

    test('should show skeleton', () => {
        const modifiedState = {
            ...preloadedState,
            articleRating: {
                ...preloadedState.articleRating,
                isLoading: true
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleRatingContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByTestId('article-rating-skeleton')
        ).toBeInTheDocument()
    })

    test('should show error', () => {
        const modifiedState = {
            ...preloadedState,
            articleRating: {
                ...preloadedState.articleRating,
                error: 'Error'
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleRatingContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByText('Ошибка при загрузке рейтинга!')
        ).toBeInTheDocument()
    })

    test('should show exact number of hovered stars', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleRatingContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        const allStars = screen.getAllByTestId('star-icon')
        const hovered = []

        allStars.forEach((star) => {
            if (star.classList.contains('hovered')) {
                hovered.push(star)
            }
        })

        expect(hovered.length).toEqual(preloadedState.articleRating.data.rate)

        hovered.length = 0

        await user.hover(allStars[4])

        allStars.forEach((star) => {
            if (star.classList.contains('hovered')) {
                hovered.push(star)
            }
        })

        expect(hovered.length).toEqual(5)
    })
})
