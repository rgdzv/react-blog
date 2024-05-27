import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities_/Article'

// export function getQueryParams(params: Record<string, string>): string {
//     const searchParams = new URLSearchParams(window.location.search)
//     Object.entries(params).forEach(([name, value]) => {
//         if (value !== undefined) {
//             searchParams.set(name, value)
//         }
//     })
//     return `?${searchParams.toString()}`
// }

// export function addQueryParams(params: Record<string, string>): void {
//     window.history.pushState(null, '', getQueryParams(params))
// }

interface getArticleListProps {
    replace?: boolean
}

export const getArticlesList = createAsyncThunk<
    Article[],
    getArticleListProps,
    ThunkConfig<string>
>(
    'articles/getArticlesList',
    async (_, { rejectWithValue, extra, getState }) => {
        try {
            const currentState = getState()
            const limit = currentState.articles?.limit
            const page = currentState.articles?.page
            const search = currentState.articles?.search
            const type = currentState.articles?.type
            const order = currentState.articles?.order
            const sort = currentState.articles?.sort

            // addQueryParams({
            //     // sort,
            //     // order,
            //     search,
            //     type
            // })

            const { data } = await extra.axiosAPI.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _type: type,
                    _sort: sort,
                    _order: order,
                    q: search
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
