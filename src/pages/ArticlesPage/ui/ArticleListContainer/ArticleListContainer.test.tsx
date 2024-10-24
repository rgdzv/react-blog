import type { Reducer } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import {
    ArticleSortField,
    ArticleSortOrder,
    ArticleType,
    ArticleView
} from 'entities_/Article'
import { ArticleBlockType } from 'entities_/ArticleDetails'
import { articlesReducer } from '../../model/slice/ArticlesSlice'
import { ArticleListContainer } from './ArticleListContainer'
import type { Action } from '@reduxjs/toolkit'
import type { ArticlesSchema } from '../../model/types/articlesSchema'

const preloadedState = {
    articles: {
        isLoading: false,
        error: '',
        page: 1,
        hasMore: false,
        limit: 4,
        view: ArticleView.BIG,
        inited: false,
        search: '',
        type: ArticleType.ALL,
        sort: ArticleSortField.CREATED,
        order: ArticleSortOrder.ASC,
        totalCount: 10,
        ids: ['1'],
        entities: {
            '1': {
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
}

const reducersMock = {
    articles: articlesReducer as Reducer<
        ArticlesSchema | undefined,
        Action<any>
    >
}

describe('Articles', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleListContainer />
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
        expect(screen.getByText('Test paragraph...')).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Читать' })
        ).toBeInTheDocument()
        expect(screen.getByText('10')).toBeInTheDocument()
    })

    test('should show skeleton when no articles presented', () => {
        const modifiedState = {
            articles: {
                ...preloadedState.articles,
                isLoading: true,
                hasMore: true,
                ids: [],
                entities: {}
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleListContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        const skeletons = screen.getAllByTestId('article-big-skeleton')
        expect(skeletons.length).toEqual(preloadedState.articles.limit)
        expect(
            screen.getByRole('button', { name: 'Загрузка...' })
        ).toBeInTheDocument()
    })

    test('should show error', () => {
        const modifiedState = {
            articles: {
                ...preloadedState.articles,
                error: 'Error!'
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleListContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByText('Ошибка при загрузке статей!')
        ).toBeInTheDocument()
    })

    test('should show empty sign', () => {
        const modifiedState = {
            articles: {
                ...preloadedState.articles,
                ids: [],
                entities: {}
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleListContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByText('Статьи не найдены!')).toBeInTheDocument()
    })

    test('shoud show small components', () => {
        const modifiedState = {
            articles: {
                ...preloadedState.articles,
                view: ArticleView.SMALL
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <ArticleListContainer />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByTestId('article-list-item-small')
        ).toBeInTheDocument()
    })
})
