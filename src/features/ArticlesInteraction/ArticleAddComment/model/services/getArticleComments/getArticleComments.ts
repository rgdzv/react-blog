import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleCommentType } from 'entities_/ArticleComment'

export const getArticleComments = createAsyncThunk<
    ArticleCommentType[],
    string,
    ThunkConfig<string>
>(
    'articleComments/getArticleComments',
    async (articleId, { rejectWithValue, extra }) => {
        try {
            const { data } = await extra.axiosAPI.get<ArticleCommentType[]>(
                '/comments',
                {
                    params: {
                        articleId,
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
