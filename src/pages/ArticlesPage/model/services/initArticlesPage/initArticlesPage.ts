import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { articlesActions } from '../../slice/ArticlesSlice'
import { getArticlesList } from '../getArticlesList/getArticlesList'

export const initArticlesPage = createAsyncThunk<
    /* eslint-disable @typescript-eslint/no-invalid-void-type */
    void,
    void,
    ThunkConfig<string>
>('articles/initArticlesPage', async (_, { dispatch }) => {
    dispatch(articlesActions.initState())
    void dispatch(getArticlesList({}))
})
