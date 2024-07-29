import {
    createEntityAdapter,
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { type ArticleCommentSchema } from '../types/articleCommentSchema'
import { getArticleComments } from '../services/getArticleComments/getArticleComments'
import { type ArticleCommentType } from 'entities_/ArticleComment'
import { addArticleComment } from '../services/addArticleComment/addArticleComment'
import { deleteArticleComment } from '../services/deleteArticleComment/deleteArticleComment'
import { type StateSchema } from 'app/providers/StoreProvider'

const articleCommentsAdapter = createEntityAdapter<ArticleCommentType>({
    selectId: (articleComment) => articleComment.id
})

export const getArticleCommentsData =
    articleCommentsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleComments ?? articleCommentsAdapter.getInitialState()
    )

const initialState =
    articleCommentsAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        text: ''
    })

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
                (state, action: PayloadAction<ArticleCommentType[]>) => {
                    articleCommentsAdapter.setAll(state, action.payload)
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
            .addCase(addArticleComment.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(addArticleComment.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(addArticleComment.rejected, (state, action) => {
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
                state.isLoading = false
            })
            .addCase(deleteArticleComment.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(deleteArticleComment.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(deleteArticleComment.rejected, (state, action) => {
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
