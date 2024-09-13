import { useCallback } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleRating } from 'entities_/ArticleRating'
import { Skeleton } from 'shared/ui'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { getArticleRatingData } from '../../model/selectors/getArticleRatingData/getArticleRatingData'
import { updateArticleRating } from '../../model/services/updateArticleRating/updateArticleRating'
import { getArticleRatingIsLoading } from '../../model/selectors/getArticleRatingIsLoading/getArticleRatingIsLoading'
import { getArticleRatingError } from '../../model/selectors/getArticleRatingError/getArticleRatingError'
import styles from './ArticleRatingContainer.module.scss'

export const ArticleRatingContainer: FC = () => {
    const rating = useAppSelector(getArticleRatingData)
    const isLoadingRating = useAppSelector(getArticleRatingIsLoading)
    const ratingError = useAppSelector(getArticleRatingError)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const ratingErrorName = t('Ошибка при загрузке рейтинга!')
    const ratingSignName = t('Оцените статью')
    const rate = rating?.rate

    const handleRatingUpdate = useCallback(
        (rateNumber: number): void => {
            void dispatch(updateArticleRating(rateNumber))
        },
        [dispatch]
    )

    if (isLoadingRating) {
        return <Skeleton type='articleRating' />
    }

    if (ratingError !== '') {
        return (
            <div className={styles.articleRatingContainerError}>
                {ratingErrorName}
            </div>
        )
    }

    return (
        <ArticleRating
            ratingSign={ratingSignName}
            rate={rate}
            handleRatingUpdate={handleRatingUpdate}
        />
    )
}
