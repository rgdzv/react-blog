import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlePageSchema'
import { getArticlesList } from '../services/getArticlesList/getArticlesList'

const initialState: ArticlesPageSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    page: 1,
    hasMore: true,
    limit: 4
}

const articlesPageSlice = createSlice({
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
                if (state.page === 1) {
                    state.data = action.payload
                } else {
                    state.data = state.data?.concat(action.payload)
                }

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
    articlesPageSlice
