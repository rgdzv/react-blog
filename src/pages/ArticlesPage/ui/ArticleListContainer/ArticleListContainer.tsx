import { useCallback, type FC } from 'react'
import { ArticleListItem } from '../../../../entities_/Article/ui/ArticleListItem/ArticleListItem'
import { noavatar, noimage } from 'shared/assets'
import {
    getArticles,
    getArticlesError,
    getArticlesIsLoading,
    getArticlesView,
    getArticlesHasMore,
    getArticlesNextPage,
    getArticlesLimit
} from 'pages/ArticlesPage'
import { useTranslation } from 'react-i18next'
import styles from './ArticleListContainer.module.scss'
import { ArticleView } from '../../../../entities_/Article/model/const/articleConst'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { ArticleListItemSmall } from '../../../../entities_/Article/ui/ArticleListItemSmall/ArticleListItemSmall'
import { Button, Skeleton } from 'shared/ui'
import {
    ArticleBlockType,
    type ArticleTextBlock
} from 'entities_/ArticleDetails'

export const ArticleListContainer: FC = () => {
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesIsLoading)
    const error = useAppSelector(getArticlesError)
    const view = useAppSelector(getArticlesView)
    const hasMore = useAppSelector(getArticlesHasMore)
    const limit = useAppSelector(getArticlesLimit)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const errorName = t('Ошибка при загрузке статей!')
    const noArticles = t('Статьи не найдены!')
    const buttonName = t('Читать')
    const loadMoreButtonName = isLoading ? t('Загрузка...') : t('Показать еще')

    const articleList = articles?.map((item) => {
        const avatar = item.user.avatar ?? noavatar
        const articleImage = item.img ?? noimage

        const block = item.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock

        const longTextBlock =
            block?.paragraph.split('.').slice(0, 3).join('.') + '...'
        const shortTextBlock =
            block?.paragraph.substring(0, block?.paragraph.indexOf('.')) + '...'

        const textBlock =
            block !== undefined
                ? view === ArticleView.BIG
                    ? longTextBlock
                    : shortTextBlock
                : 'No text...'

        const transformedDate = new Date(item.created).toLocaleDateString()

        if (view === ArticleView.SMALL) {
            return (
                <ArticleListItemSmall
                    key={item.id}
                    id={item.userId}
                    avatar={avatar}
                    articleImage={articleImage}
                    date={transformedDate}
                    views={item.views}
                    textBlock={textBlock}
                    userName={item.user.username}
                    articleId={item.id}
                />
            )
        }

        return (
            <ArticleListItem
                key={item.id}
                id={item.userId}
                avatar={avatar}
                articleImage={articleImage}
                title={item.title}
                subtitle={item.subtitle}
                date={transformedDate}
                views={item.views}
                textBlock={textBlock}
                buttonName={buttonName}
                userName={item.user.username}
                articleId={item.id}
            />
        )
    })

    const skeletons = new Array(limit)
        .fill(0)
        .map((_, index) => (
            <Skeleton
                key={index}
                type={view === ArticleView.BIG ? 'articleBig' : 'articleSmall'}
            />
        ))

    const articleListCondition =
        articleList.length > 0 ? articleList : skeletons

    const atricleListClassName =
        view === ArticleView.BIG
            ? styles.articleListBig
            : styles.articleListSmall

    const loadNext = useCallback(() => {
        if (hasMore) {
            void dispatch(getArticlesNextPage())
        }
    }, [dispatch, hasMore])

    const loadMoreButtonCondition = hasMore && (
        <Button onClick={loadNext} className='bordered'>
            {loadMoreButtonName}
        </Button>
    )

    if (error !== '') {
        return <div className={styles.articlesLoadError}>{errorName}</div>
    }

    if (!isLoading && articleList === undefined) {
        return <div className={styles.articlesEmpty}>{noArticles}</div>
    }

    if (!isLoading && Array.isArray(articleList) && articleList.length === 0) {
        return <div className={styles.articlesEmpty}>{noArticles}</div>
    }

    return (
        <div className={styles.articleContent}>
            <div className={atricleListClassName}>{articleListCondition}</div>
            <div className={styles.articleButton}>
                {loadMoreButtonCondition}
            </div>
        </div>
    )
}
