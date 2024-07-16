import { type FC } from 'react'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { noavatar, noimage } from 'shared/assets'
import { ArticleDetailsContentBlock } from '../ArticleDetailsContentBlock/ArticleDetailsContentBlock'
import styles from './ArticleDetailsContainer.module.scss'
import {
    ArticleRating,
    getArticleRatingError,
    getArticleRatingIsLoading
} from 'features/ArticlesInteraction/ArticleRating'
import { Skeleton } from 'shared/ui'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { useTranslation } from 'react-i18next'

export const ArticleDetailsContainer: FC = () => {
    const isLoadingDetails = useAppSelector(getArticleDetailsIsLoading)
    const isLoadingRating = useAppSelector(getArticleRatingIsLoading)
    const detailsError = useAppSelector(getArticleDetailsError)
    const ratingError = useAppSelector(getArticleRatingError)
    const article = useAppSelector(getArticleDetailsData)
    const { t } = useTranslation('article')

    const avatar = article?.user.avatar ?? noavatar
    const articleImage = article?.img ?? noimage
    const transformedDate = new Date(article?.created).toLocaleDateString()

    const contentBlock = article?.blocks.map(ArticleDetailsContentBlock)

    const detailsErrorName = t('Ошибка при загрузке статьи!')
    const ratingErrorName = t('Ошибка при загрузке рейтинга!')

    const articleRatingCondition = isLoadingRating ? (
        <Skeleton type='articleRating' />
    ) : ratingError !== '' ? (
        <div className={styles.articleRatingContainerError}>
            {ratingErrorName}
        </div>
    ) : (
        <ArticleRating />
    )

    if (isLoadingDetails) {
        return (
            <div className={styles.articleDetailsContainer}>
                <Skeleton type='articleDetails' />
                <Skeleton type='articleRating' />
            </div>
        )
    }

    if (detailsError !== '') {
        return (
            <div className={styles.articleDetailsContainerError}>
                {detailsErrorName}
            </div>
        )
    }

    return (
        <div className={styles.articleDetailsContainer}>
            <ArticleDetails
                profileId={article?.userId}
                avatar={avatar}
                articleImage={articleImage}
                userName={article?.user.username}
                date={transformedDate}
                title={article?.title}
                subtitle={article?.subtitle}
                contentBlock={contentBlock}
            />
            {articleRatingCondition}
        </div>
    )
}
