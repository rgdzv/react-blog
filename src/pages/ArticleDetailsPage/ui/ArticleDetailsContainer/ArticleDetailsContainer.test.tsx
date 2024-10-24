import type { Reducer } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities_/Article'
import { ArticleBlockType } from 'entities_/ArticleDetails'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleDetailsContainer } from './ArticleDetailsContainer'
import type { ArticleDetailsSchema } from '../../model/types/articleDetailsSchema'
import type { Action } from '@reduxjs/toolkit'

const preloadedState = {
    articleDetails: {
        isLoading: false,
        error: '',
        data: {
            id: '1',
            title: 'Заголовок тестовой статьи',
            subtitle: 'Подзаголовок тестовой статьи',
            img: 'test',
            views: 10,
            created: 1663417845000,
            userId: '1',
            type: [ArticleType.ALL],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT as ArticleBlockType.TEXT,
                    paragraph: 'Test paragraph',
                    title: 'Test title'
                }
            ],
            user: {
                id: '1',
                username: 'Alex'
            }
        }
    }
}

const reducersMock = {
    articleDetails: articleDetailsReducer as Reducer<
        ArticleDetailsSchema | undefined,
        Action<any>
    >
}

describe('ArticleDetails', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleDetailsContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByAltText('article avatar')).toBeInTheDocument()
        expect(screen.getByText('Alex')).toBeInTheDocument()
        expect(
            screen.getByText('Заголовок тестовой статьи')
        ).toBeInTheDocument()
        expect(
            screen.getByText('Подзаголовок тестовой статьи')
        ).toBeInTheDocument()
        expect(screen.getByAltText('article image')).toBeInTheDocument()
        expect(screen.getByAltText('article image')).toHaveAttribute(
            'src',
            'test'
        )
        expect(screen.getByText('Test paragraph')).toBeInTheDocument()
    })

    test('should render skeleton when isLoading is true', () => {
        const modifiedState = {
            articleDetails: {
                ...preloadedState.articleDetails,
                isLoading: true
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleDetailsContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByTestId('article-details-skeleton')
        ).toBeInTheDocument()
    })

    test('should render error', () => {
        const modifiedState = {
            articleDetails: {
                ...preloadedState.articleDetails,
                error: 'Error'
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleDetailsContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByText('Ошибка при загрузке статьи!')
        ).toBeInTheDocument()
    })
})
