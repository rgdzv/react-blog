import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticleRatingSchema } from '../types/articleRatingSchema'
import { type ArticleRating } from '../types/articleRating'
import { getArticleRating } from '../services/getArticleRating'

const initialState: ArticleRatingSchema = {
    rating: undefined,
    isLoading: false,
    error: undefined
}

export const articleRatingSlice = createSlice({
    name: 'articleRating',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticleRating.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(
            getArticleRating.fulfilled,
            (state, action: PayloadAction<ArticleRating>) => {
                state.rating = action.payload
                state.isLoading = false
            }
        )
        builder.addCase(getArticleRating.rejected, (state, action) => {
            if (action.payload !== undefined) {
                state.error = action.payload
            } else {
                state.error = action.error.message
            }
            state.isLoading = false
        })
    }
})

export const { actions: articleRatingActions } = articleRatingSlice
export const { reducer: articleRatingReducer } = articleRatingSlice
