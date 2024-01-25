import { createSlice } from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlePageSchema'
import { getArticlesList } from '../services/getArticlesList/getArticlesList'

const initialState: ArticlesPageSchema = {
    data: undefined,
    isLoading: false,
    error: undefined
}

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesList.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getArticlesList.fulfilled, (state, action) => {
                state.data = action.payload
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
