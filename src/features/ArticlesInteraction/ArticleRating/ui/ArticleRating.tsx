import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { useEffect, type FC } from 'react'
import { getArticleRating } from '../model/services/getArticleRating'
import { useTranslation } from 'react-i18next'
import styles from './ArticleRating.module.scss'
import { Stars } from 'shared/ui'
import { getArticleRate } from '../model/selectors/getArticleRate/getArticleRate'

interface ArticleRatingPropsInterface {
    userId: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingPropsInterface> = ({
    userId,
    articleId
}) => {
    const rate = useAppSelector(getArticleRate)
    // const [starsCount, setStarsCount] = useState(rate)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const ratingSign = t('Оцените статью')

    useEffect(() => {
        void dispatch(getArticleRating({ userId, articleId }))
    }, [userId, articleId, dispatch, rate])

    return (
        <div className={styles.articleRating}>
            <p className={styles.ratingOffer}>{ratingSign}</p>
            <Stars />
        </div>
    )
}

export default ArticleRating
