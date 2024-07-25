import { type FC } from 'react'
import { ArticleDetails } from '../../../../entities_/ArticleDetails/ui/ArticleDetails/ArticleDetails'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { noavatar, noimage } from 'shared/assets'
import { ArticleDetailsContentBlock } from '../../../../entities_/ArticleDetails/ui/ArticleDetailsContentBlock/ArticleDetailsContentBlock'
import styles from './ArticleDetailsContainer.module.scss'
import {
    ArticleRating,
    getArticleRatingError,
    getArticleRatingIsLoading
} from 'features/ArticlesInteraction/ArticleRating'
import { Skeleton } from 'shared/ui'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { useTranslation } from 'react-i18next'
import {
    ArticleCommentContainer,
    getArticleCommentError,
    getArticleCommentIsLoading
} from 'features/ArticlesInteraction/ArticleAddComment'

export const ArticleDetailsContainer: FC = () => {
    const isLoadingDetails = useAppSelector(getArticleDetailsIsLoading)
    const isLoadingRating = useAppSelector(getArticleRatingIsLoading)
    const isLoadingComments = useAppSelector(getArticleCommentIsLoading)
    const detailsError = useAppSelector(getArticleDetailsError)
    const ratingError = useAppSelector(getArticleRatingError)
    const commentError = useAppSelector(getArticleCommentError)
    const article = useAppSelector(getArticleDetailsData)
    const { t } = useTranslation('article')

    const avatar = article?.user.avatar ?? noavatar
    const articleImage = article?.img ?? noimage
    const transformedDate = new Date(article?.created).toLocaleDateString()

    const contentBlock = article?.blocks.map(ArticleDetailsContentBlock)

    const detailsErrorName = t('Ошибка при загрузке статьи!')
    const ratingErrorName = t('Ошибка при загрузке рейтинга!')
    const commentErrorName = t('Ошибка при загрузке комментариев!')
    const detailsEmptyName = t('Статья не найдена!')

    const articleRatingCondition = isLoadingRating ? (
        <Skeleton type='articleRating' />
    ) : ratingError !== '' ? (
        <div className={styles.articleRatingContainerError}>
            {ratingErrorName}
        </div>
    ) : (
        <ArticleRating />
    )

    const articleCommentsCondition = isLoadingComments ? (
        <Skeleton type='articleComments' />
    ) : commentError !== '' ? (
        <div className={styles.articleCommentContainerError}>
            {commentErrorName}
        </div>
    ) : (
        <ArticleCommentContainer />
    )

    const articleDetailsCondition = isLoadingDetails ? (
        <>
            <Skeleton type='articleDetails' />
            <Skeleton type='articleRating' />
            <Skeleton type='articleComments' />
        </>
    ) : (
        <>
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
            {articleCommentsCondition}
        </>
    )

    if (detailsError !== '') {
        return (
            <div className={styles.articleDetailsContainerError}>
                {detailsErrorName}
            </div>
        )
    }

    if (!isLoadingDetails && article === undefined) {
        return (
            <div className={styles.articleDetailsContainerEmpty}>
                {detailsEmptyName}
            </div>
        )
    }

    return (
        <div className={styles.articleDetailsContainer}>
            {articleDetailsCondition}
        </div>
    )
}
