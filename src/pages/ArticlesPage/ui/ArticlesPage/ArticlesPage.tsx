import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { articlesReducer } from '../../model/slice/ArticlesSlice'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { ArticleList } from '../ArticleList/ArticleList'
import { Page } from 'widgets/Page'
import { ArticlesViewChanger } from 'features/ArticlesInteraction/ArticlesViewChanger'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticleFilters } from 'widgets/ArticleFilters'
import { getArticlesInited } from '../../model/selectors/getArticlesInited/getArticlesInited'

const reducers: ReducersList = {
    articles: articlesReducer
}

const ArticlesPage: FC = () => {
    const dispatch = useAppDispatch()
    const inited = useAppSelector(getArticlesInited)

    useEffect(() => {
        if (!inited) {
            void dispatch(initArticlesPage())
        }
    }, [dispatch, inited])

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <Page dataTestId='articles-page' className='articles'>
                <>
                    <ArticlesViewChanger />
                    <ArticleList />
                    <ArticleFilters />
                </>
            </Page>
        </DynamicReducerLoader>
    )
}

export default ArticlesPage
