import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities_/Article'
import type { Article } from 'entities_/Article'
import { articlesActions } from '../../slice/ArticlesSlice'
interface getArticleListProps {
    replace?: boolean
}

export const getArticlesList = createAsyncThunk<
    Article[],
    getArticleListProps,
    ThunkConfig<string>
>(
    'articles/getArticlesList',
    async (_, { rejectWithValue, extra, getState, dispatch }) => {
        try {
            const currentState = getState()
            const limit = currentState.articles?.limit
            const page = currentState.articles?.page
            const search = currentState.articles?.search
            const type = currentState.articles?.type
            const order = currentState.articles?.order
            const sort = currentState.articles?.sort
            const totalCount = currentState.articles?.totalCount

            const { data, headers } = await extra.axiosAPI.get<Article[]>(
                `/articles`,
                {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        type: type === ArticleType.ALL ? undefined : type,
                        _sort: sort,
                        _order: order,
                        q: search
                    }
                }
            )

            const total = headers['x-total-count']

            if (Number(total) !== totalCount) {
                dispatch(articlesActions.setTotalCount(Number(total)))
            }

            return data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
