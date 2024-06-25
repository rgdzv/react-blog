import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
    type ArticleRatingParams,
    type ArticleRating
} from '../types/articleRating'

export const getArticleRating = createAsyncThunk<
    ArticleRating,
    ArticleRatingParams,
    ThunkConfig<string>
>(
    'articleRating/getArticleRating',
    async ({ articleId, userId }, { rejectWithValue, extra }) => {
        try {
            const { data } = await extra.axiosAPI.get<ArticleRating>(
                '/article-ratings',
                {
                    params: {
                        userId,
                        articleId
                    }
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
