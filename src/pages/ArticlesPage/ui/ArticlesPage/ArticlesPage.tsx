import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { articlesPageReducer } from '../../model/slice/ArticlesPageSlice'
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
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={styles.articlesPage} data-testid='articles-page'>
                <div></div>
                <ArticleList />
                <div></div>
            </div>
        </DynamicReducerLoader>
    )
}

export default ArticlesPage
