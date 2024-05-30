import {
    type PayloadAction,
    createSlice,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlePageSchema'
import { getArticlesList } from '../services/getArticlesList/getArticlesList'
import {
    ArticleView,
    type Article,
    ArticleType,
    ArticleSortField,
    ArticleSortOrder
} from 'entities_/Article'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles ?? articlesAdapter.getInitialState()
)

const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    page: 1,
    hasMore: true,
    limit: 4,
    view: ArticleView.BIG,
    inited: false,
    search: '',
    type: ArticleType.ALL,
    sort: ArticleSortField.CREATED,
    order: ArticleSortOrder.ASC,
    totalCount: 0
})

export const ArticlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        setOrder: (state, action: PayloadAction<ArticleSortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.totalCount = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
            state.inited = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesList.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined

                if (action.meta.arg.replace === true) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(getArticlesList.fulfilled, (state, action) => {
                if (action.meta.arg.replace === true) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
                state.hasMore =
                    Object.keys(state.entities).length < state.totalCount
                state.isLoading = false
            })
            .addCase(getArticlesList.rejected, (state, action) => {
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
                state.isLoading = false
            })
    }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
    ArticlesPageSlice
