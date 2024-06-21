import { useAppDispatch } from 'app/providers/StoreProvider'
import {
    ArticleDetailsContainer,
    articleDetailsReducer,
    getArticleById
} from 'entities_/Article'
import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { Page } from 'widgets/Page'

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
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
                    {/* <div>Редактировать</div> */}
                </>
            </Page>
        </DynamicReducerLoader>
    )
}

export default ArticleDetailsPage
