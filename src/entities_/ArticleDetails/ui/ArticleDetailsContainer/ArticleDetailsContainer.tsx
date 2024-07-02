import { type FC } from 'react'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
// import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { noavatar, noimage } from 'shared/assets'
import { ArticleDetailsContentBlock } from '../ArticleDetailsContentBlock/ArticleDetailsContentBlock'
import styles from './ArticleDetailsContainer.module.scss'
import { ArticleRating } from 'features/ArticlesInteraction/ArticleRating'
import { Skeleton } from 'shared/ui'

export const ArticleDetailsContainer: FC = () => {
    const detailsIsLoading = useAppSelector(getArticleDetailsIsLoading)
    // const detailsError = useAppSelector(getArticleDetailsError)
    const article = useAppSelector(getArticleDetailsData)

    const avatar = article?.user.avatar ?? noavatar
    const articleImage = article?.img ?? noimage
    const transformedDate = new Date(article?.created).toLocaleDateString()

    const contentBlock = article?.blocks.map(ArticleDetailsContentBlock)

    const articleId = article?.id
    const userId = article?.userId

    const articleDetailsCondition = detailsIsLoading ? (
        <Skeleton type='articleDetails' />
    ) : (
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
    )

    return (
        <div className={styles.articleDetailsContainer}>
            {articleDetailsCondition}
            <ArticleRating userId={userId} articleId={articleId} />
        </div>
    )
}
