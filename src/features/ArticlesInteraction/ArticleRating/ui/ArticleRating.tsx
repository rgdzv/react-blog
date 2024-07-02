import { useAppDispatch } from 'app/providers/StoreProvider'
import { useEffect, type FC } from 'react'
import { getArticleRating } from '../model/services/getArticleRating'
import { useTranslation } from 'react-i18next'
import styles from './ArticleRating.module.scss'
import { Button } from 'shared/ui'
import { StarIcon } from 'shared/assets'

const starsNumber = [1, 2, 3, 4, 5]

interface ArticleRatingPropsInterface {
    userId: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingPropsInterface> = ({
    userId,
    articleId
}) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const ratingSign = t('Оцените статью')

    const stars = starsNumber.map((star) => (
        <Button key={star} className='star'>
            <StarIcon />
        </Button>
    ))

    useEffect(() => {
        void dispatch(getArticleRating({ userId, articleId }))
    }, [userId, articleId, dispatch])

    return (
        <div className={styles.articleRating}>
            <p className={styles.ratingOffer}>{ratingSign}</p>
            <div className={styles.ratingStars}>{stars}</div>
        </div>
    )
}

export default ArticleRating
