import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { ArticleRatingType } from 'entities_/ArticleRating'
import type { ArticleRatingGetParams } from '../../types/articleRatingGetParams'

export const getArticleRating = createAsyncThunk<
    ArticleRatingType,
    ArticleRatingGetParams,
    ThunkConfig<string>
>(
    'articleRating/getArticleRating',
    async ({ articleId, userId }, { rejectWithValue, extra }) => {
        try {
            const { data } = await extra.axiosAPI.get<ArticleRatingType>(
                '/article-ratings',
                {
                    params: {
                        userId,
                        articleId
                    },
                    transformResponse: [
                        (data) => {
                            const parsed = JSON.parse(data)
                            return parsed[0]
                        }
                    ]
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
