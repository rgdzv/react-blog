import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { getArticlesList } from '../../model/services/getArticlesList/getArticlesList'
import { ArticleList } from '../../../../entities_/Article/ui/ArticleList/ArticleList'
import styles from './ArticlesPage.module.scss'

const reducers: ReducersList = {
    articles: articlesPageReducer
}

const ArticlesPage: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(getArticlesList())
    }, [dispatch])

    return (
        <div className={styles.articlesPage} data-testid='articles-page'>
            <DynamicReducerLoader
                reducers={reducers}
                removeAfterUnmount={false}
            >
                <ArticleList />
            </DynamicReducerLoader>
        </div>
    )
}

export default ArticlesPage
