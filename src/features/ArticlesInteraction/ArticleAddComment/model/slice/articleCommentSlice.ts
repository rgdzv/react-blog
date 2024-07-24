import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleCommentSchema } from '../types/articleCommentSchema'
import { getArticleComments } from '../services/gerArticleComments/getArticleComments'
import { type ArticleComment } from 'entities_/ArticleComment'

const initialState: ArticleCommentSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    text: ''
}

export const articleCommentsSlice = createSlice({
    name: 'articleComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticleComments.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                getArticleComments.fulfilled,
                (state, action: PayloadAction<ArticleComment[]>) => {
                    state.data = action.payload
                    state.isLoading = false
                }
            )
            .addCase(getArticleComments.rejected, (state, action) => {
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
                state.isLoading = false
            })
    }
})

export const { actions: articleCommentsActions } = articleCommentsSlice
export const { reducer: articleCommentsReducer } = articleCommentsSlice
