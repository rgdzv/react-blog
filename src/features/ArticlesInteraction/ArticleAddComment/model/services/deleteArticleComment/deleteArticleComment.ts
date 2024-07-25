import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleComments } from '../getArticleComments/getArticleComments'

export const deleteArticleComment = createAsyncThunk<
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    string,
    ThunkConfig<string>
>(
    'articleComments/deleteArticleComment',
    async (commentId, { rejectWithValue, extra, getState, dispatch }) => {
        try {
            const currentState = getState()
            const articleId = currentState?.articleDetails?.data?.id

            await extra.axiosAPI.delete(`/comments/${commentId}`)

            await dispatch(getArticleComments(articleId as string))
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
