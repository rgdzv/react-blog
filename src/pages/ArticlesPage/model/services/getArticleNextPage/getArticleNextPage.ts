/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageNumber } from '../../selectors/getArticlesPageNumber/getArticlePageNumber'
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { getArticlesList } from '../getArticlesList/getArticlesList'
import { articlesPageActions } from '../../slice/ArticlesPageSlice'

export const getArticlesNextPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articles/getArticlesNextPage', async (_, { getState, dispatch }) => {
    const currentState = getState()
    const page = getArticlesPageNumber(currentState)
    const isLoading = getArticlesPageIsLoading(currentState)

    if (!isLoading) {
        dispatch(articlesPageActions.setPage(page + 1))
        void dispatch(getArticlesList({}))
    }
})
