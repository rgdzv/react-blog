import {
    type PayloadAction,
    createSlice,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlePageSchema'
import { getArticlesList } from '../services/getArticlesList/getArticlesList'
import { type Article } from 'entities_/Article'
import { type StateSchema } from 'app/providers/StoreProvider'

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
    limit: 4
})

export const ArticlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getArticlesList.fulfilled, (state, action) => {
                state.hasMore = action.payload.length >= state.limit
                articlesAdapter.addMany(state, action.payload)
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
