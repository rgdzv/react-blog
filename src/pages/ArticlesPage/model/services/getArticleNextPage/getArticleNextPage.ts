/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesNumber } from '../../selectors/getArticlesNumber/getArticleNumber'
import { getArticlesIsLoading } from '../../selectors/getArticlesIsLoading/getArticlesIsLoading'
import { getArticlesList } from '../getArticlesList/getArticlesList'
import { articlesActions } from '../../slice/ArticlesSlice'

export const getArticlesNextPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articles/getArticlesNextPage', async (_, { getState, dispatch }) => {
    const currentState = getState()
    const page = getArticlesNumber(currentState)
    const isLoading = getArticlesIsLoading(currentState)

    if (!isLoading) {
        dispatch(articlesActions.setPage(page + 1))
        void dispatch(getArticlesList({}))
    }
})
