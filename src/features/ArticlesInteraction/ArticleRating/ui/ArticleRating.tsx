import { useAppDispatch } from 'app/providers/StoreProvider'
import { useEffect, type FC } from 'react'
import { getArticleRating } from '../model/services/getArticleRating'

interface ArticleRatingPropsInterface {
    userId: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingPropsInterface> = ({
    userId,
    articleId
}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(getArticleRating({ userId, articleId }))
    }, [userId, articleId, dispatch])

    return <div></div>
}

export default ArticleRating
