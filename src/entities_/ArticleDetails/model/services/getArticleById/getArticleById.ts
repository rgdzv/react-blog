import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities_/Article'

export const getArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/getchArticleById',
    async (articleId, { rejectWithValue, extra }) => {
        try {
            const { data } = await extra.axiosAPI.get<Article>(
                `/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user'
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
