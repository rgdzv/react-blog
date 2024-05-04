import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { articlesPageReducer } from '../../model/slice/ArticlesPageSlice'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { ArticleList } from '../../../../entities_/Article/ui/ArticleList/ArticleList'
import { Page } from 'widgets/Page'
import { ArticlesViewChanger } from 'features/ArticlesInteraction/ArticlesViewChanger'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'

const reducers: ReducersList = {
    articles: articlesPageReducer
}

const ArticlesPage: FC = () => {
    const dispatch = useAppDispatch()

    const loadNext = (): void => {
        console.log('INTERSECTED')
    }

    useEffect(() => {
        void dispatch(initArticlesPage())
    }, [dispatch])

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                dataTestId='articles-page'
                className='articles'
                onScrollEnd={loadNext}
            >
                <>
                    <ArticlesViewChanger />
                    <ArticleList />
                </>
            </Page>
        </DynamicReducerLoader>
    )
}

export default ArticlesPage
