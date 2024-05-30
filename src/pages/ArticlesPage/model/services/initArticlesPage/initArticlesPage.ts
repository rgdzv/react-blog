import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../slice/ArticlesPageSlice'
import { getArticlesList } from '../getArticlesList/getArticlesList'

export const initArticlesPage = createAsyncThunk<
    /* eslint-disable @typescript-eslint/no-invalid-void-type */
    void,
    void,
    ThunkConfig<string>
>('articles/initArticlesPage', async (_, { dispatch }) => {
    dispatch(articlesPageActions.initState())
    void dispatch(getArticlesList({}))
})
