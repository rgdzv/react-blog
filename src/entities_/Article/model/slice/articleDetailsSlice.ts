import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getArticleById } from '../services/getArticleById/getArticleById'
import { type Article } from '../types/article'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                getArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.data = action.payload
                    state.isLoading = false
                }
            )
            .addCase(getArticleById.rejected, (state, action) => {
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
                state.isLoading = false
            })
    }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
