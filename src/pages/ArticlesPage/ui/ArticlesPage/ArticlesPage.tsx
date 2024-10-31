import { useEffect } from 'react'
import type { FC } from 'react'
import { Page } from 'widgets/Page'
import { ArticleFilters } from 'widgets/ArticleFilters'
import { ArticlesViewChanger } from 'features/ArticlesInteraction/ArticlesViewChanger'
import {
    DynamicReducerLoader,
    useAppDispatch,
    useAppSelector
} from 'shared/lib'
import type { ReducersList } from 'shared/lib'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesReducer } from '../../model/slice/ArticlesSlice'
import { getArticlesInited } from '../../model/selectors/getArticlesInited/getArticlesInited'
import { ArticleListContainer } from '../ArticleListContainer/ArticleListContainer'
import styles from './Articles.module.scss'

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
                    <ArticleListContainer />
                    <div className={styles.articleFiltersWrapper}>
                        <ArticlesViewChanger />
                        <ArticleFilters />
                    </div>
                </>
            </Page>
        </DynamicReducerLoader>
    )
}

export default ArticlesPage
