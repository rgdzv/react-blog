import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ArticleRating.module.scss'
import { Stars } from 'shared/ui'
import { getArticleRatingData } from '../model/selectors/getArticleRatingData/getArticleRatingData'
import { updateArticleRating } from '../model/services/updateArticleRating/updateArticleRating'

const ArticleRating: FC = () => {
    const rating = useAppSelector(getArticleRatingData)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const ratingSign = t('Оцените статью')
    const rate = rating?.[0]?.rate

    const handleRatingUpdate = (rateNumber: number): void => {
        void dispatch(updateArticleRating(rateNumber))
    }

    return (
        <div className={styles.articleRating}>
            <p className={styles.ratingOffer}>{ratingSign}</p>
            <Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />
        </div>
    )
}

export default ArticleRating
