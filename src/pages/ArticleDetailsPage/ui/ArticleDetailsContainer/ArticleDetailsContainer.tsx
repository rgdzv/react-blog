import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleRatingContainer } from 'features/ArticlesInteraction/ArticleRating'
import { ArticleCommentContainer } from 'features/ArticlesInteraction/ArticleAddComment'
import {
    ArticleDetails,
    ArticleDetailsContentBlock
} from 'entities_/ArticleDetails'
import { Skeleton } from 'shared/ui'
import { useAppSelector } from 'shared/lib'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import styles from './ArticleDetailsContainer.module.scss'

export const ArticleDetailsContainer: FC = () => {
    const isLoadingDetails = useAppSelector(getArticleDetailsIsLoading)
    const detailsError = useAppSelector(getArticleDetailsError)

    const article = useAppSelector(getArticleDetailsData)

    const { t } = useTranslation('article')
    const detailsErrorName = t('Ошибка при загрузке статьи!')
    const detailsEmptyName = t('Статья не найдена!')

    const transformedDate = new Date(article?.created).toLocaleDateString()

    const contentBlock = article?.blocks.map(ArticleDetailsContentBlock)

    const articleDetailsCondition = isLoadingDetails ? (
        <>
            <Skeleton type='articleDetails' />
            <Skeleton type='articleRating' />
            <Skeleton type='articleCommentsForm' />
            <Skeleton type='articleComments' />
        </>
    ) : (
        <>
            <ArticleDetails
                profileId={article?.userId}
                avatar={article?.user?.avatar as string}
                articleImage={article?.img}
                userName={article?.user.username}
                date={transformedDate}
                title={article?.title}
                subtitle={article?.subtitle}
                contentBlock={contentBlock}
            />
            <ArticleRatingContainer />
            <ArticleCommentContainer />
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
