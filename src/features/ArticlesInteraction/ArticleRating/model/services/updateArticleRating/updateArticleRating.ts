import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleRatingType } from 'entities_/ArticleRating'

export const updateArticleRating = createAsyncThunk<
    ArticleRatingType,
    number,
    ThunkConfig<string>
>(
    'articleRating/updateArticleRating',
    async (rate, { rejectWithValue, extra, getState }) => {
        try {
            const state = getState()
            const id = state.articleRating?.data?.id as string

            const { data } = await extra.axiosAPI.patch<ArticleRatingType>(
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
