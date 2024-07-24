import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleCommentGetParams } from '../../types/articleCommentGetParams'
import { type ArticleComment } from 'entities_/ArticleComment'

export const getArticleComments = createAsyncThunk<
    ArticleComment[],
    ArticleCommentGetParams,
    ThunkConfig<string>
>(
    'articleComments/getArticleComments',
    async ({ articleId }, { rejectWithValue, extra }) => {
        try {
            const { data } = await extra.axiosAPI.get<ArticleComment[]>(
                '/comments',
                {
                    params: {
                        articleId,
                        _expand: 'user'
                    }
                    // transformResponse: [
                    //     (data) => {
                    //         const parsed = JSON.parse(data)
                    //         return parsed[0]
                    //     }
                    // ]
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
