import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities_/Article'

export const getArticlesList = createAsyncThunk<
    Article[],
    void, // eslint-disable-line @typescript-eslint/no-invalid-void-type
    ThunkConfig<string>
>(
    'articles/getArticlesList',
    async (_, { rejectWithValue, extra, getState }) => {
        try {
            const currentState = getState()
            const limit = currentState.articles?.limit
            const page = currentState.articles?.page

            const { data } = await extra.axiosAPI.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
                }
            })
            return data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
