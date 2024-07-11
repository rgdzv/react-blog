import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleRating } from '../../types/articleRating'

export const updateArticleRating = createAsyncThunk<
    ArticleRating[],
    number,
    ThunkConfig<string>
>(
    'articleRating/updateArticleRating',
    async (rate, { rejectWithValue, extra, getState }) => {
        try {
            const state = getState()
            const id = state.articleRating?.data?.[0]?.id

            const { data } = await extra.axiosAPI.patch<ArticleRating[]>(
                '/article-ratings',
                {
                    rate
                },
                {
                    params: { id }
                }
            )
            console.log(data)
            return data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
