import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleRating } from 'entities_/ArticleRating'

export const updateArticleRating = createAsyncThunk<
    ArticleRating,
    number,
    ThunkConfig<string>
>(
    'articleRating/updateArticleRating',
    async (rate, { rejectWithValue, extra, getState }) => {
        try {
            const state = getState()
            const id = state.articleRating?.data?.id as string

            const { data } = await extra.axiosAPI.patch<ArticleRating>(
                `/article-ratings/${id}`,
                {
                    rate
                }
            )
            return data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
