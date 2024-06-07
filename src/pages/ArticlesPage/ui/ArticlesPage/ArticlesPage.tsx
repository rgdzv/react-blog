import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { articlesPageReducer } from '../../model/slice/ArticlesPageSlice'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { ArticleList } from '../../../../entities_/Article/ui/ArticleList/ArticleList'
import { Page } from 'widgets/Page'
import { ArticlesViewChanger } from 'features/ArticlesInteraction/ArticlesViewChanger'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticleFilters } from 'widgets/ArticleFilters'
import { getArticlesPageInited } from '../../model/selectors/getArticlesPageInited/getArticlesPageInited'

const reducers: ReducersList = {
    articles: articlesPageReducer
}

const ArticlesPage: FC = () => {
    const dispatch = useAppDispatch()
    const inited = useAppSelector(getArticlesPageInited)

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
