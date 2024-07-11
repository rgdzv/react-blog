import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities_/Article'
import { getArticleRating } from 'features/ArticlesInteraction/ArticleRating'

export const getArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/getchArticleById',
    async (ID, { rejectWithValue, extra, dispatch }) => {
        try {
            const { data } = await extra.axiosAPI.get<Article>(
                `/articles/${ID}`,
                {
                    params: {
                        _expand: 'user'
                    }
                }
            )

            await dispatch(
                getArticleRating({
                    userId: data.userId,
                    articleId: data.id
                })
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
