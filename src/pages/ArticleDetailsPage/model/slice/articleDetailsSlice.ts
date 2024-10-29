import { createSlice } from '@reduxjs/toolkit'
import type { Article } from 'entities_/Article'
import { getArticleById } from '../services/getArticleById/getArticleById'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: null
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
