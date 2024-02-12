import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageNumber } from '../../selectors/getArticlesPageNumber/getArticlePageNumber'
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore'
import { getArticlesList } from '../getArticlesList/getArticlesList'
import { articlesPageActions } from '../../slice/articlesPageSlice'

/* eslint-disable @typescript-eslint/no-invalid-void-type */

export const getArticlesNextPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articles/getArticlesNextPage', async (_, { getState, dispatch }) => {
    const currentState = getState()
    const hasMore = getArticlesPageHasMore(currentState)
    const page = getArticlesPageNumber(currentState)
    const isLoading = getArticlesPageIsLoading(currentState)

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1))
        void dispatch(getArticlesList())
    }
})
