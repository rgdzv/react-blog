import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../slice/ArticlesPageSlice'
import { getArticlesList } from '../getArticlesList/getArticlesList'

export const initArticlesPage = createAsyncThunk<
    /* eslint-disable @typescript-eslint/no-invalid-void-type */
    void,
    void,
    ThunkConfig<string>
>('articles/initArticlesPage', async (_, { getState, dispatch }) => {
    const currentState = getState()
    const inited = currentState.articles?.inited

    if (inited === false) {
        // const orderFromUrl = searchParams.get('order') as SortOrder
        // const sortFromUrl = searchParams.get('sort') as ArticleSortField
        // const searchFromUrl = searchParams.get('search')
        // const typeFromUrl = searchParams.get('type') as ArticleType

        // if (orderFromUrl) {
        //     dispatch(articlesPageActions.setOrder(orderFromUrl))
        // }
        // if (sortFromUrl) {
        //     dispatch(articlesPageActions.setSort(sortFromUrl))
        // }
        // if (searchFromUrl) {
        //     dispatch(articlesPageActions.setSearch(searchFromUrl))
        // }
        // if (typeFromUrl) {
        //     dispatch(articlesPageActions.setType(typeFromUrl))
        // }

        dispatch(articlesPageActions.initState())
        void dispatch(getArticlesList({}))
    }
})
