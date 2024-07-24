import { useAppDispatch } from 'app/providers/StoreProvider'
import { articleCommentsReducer } from 'features/ArticlesInteraction/ArticleAddComment'
import { ArticleDetailsEdit } from 'features/ArticlesInteraction/ArticleDetailsEdit'
import { articleRatingReducer } from 'features/ArticlesInteraction/ArticleRating'
import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { Page } from 'widgets/Page'
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { getArticleById } from '../../model/services/getArticleById/getArticleById'

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
    articleRating: articleRatingReducer,
    articleComments: articleCommentsReducer
}

const ArticleDetailsPage: FC = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(getArticleById(id as string))
    }, [dispatch, id])

    if (id === undefined) {
        return null
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page dataTestId='articles-page-details' className='articleDetails'>
                <>
                    <ArticleDetailsContainer />
                    <ArticleDetailsEdit />
                </>
            </Page>
        </DynamicReducerLoader>
    )
}

export default ArticleDetailsPage
