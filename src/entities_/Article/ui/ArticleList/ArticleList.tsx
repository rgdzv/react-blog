import { type FC } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { noavatar, noimage } from 'shared/assets'
import {
    getArticles,
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from 'pages/ArticlesPage'
import { useTranslation } from 'react-i18next'
import styles from './ArticleList.module.scss'
import { type ArticleTextBlock } from '../../model/types/article'
import { ArticleBlockType, ArticleView } from '../../model/const/articleConst'
import { useAppSelector } from 'app/providers/StoreProvider'
import { ArticleListItemSmall } from '../ArticleListItemSmall/ArticleListItemSmall'
import { Skeleton } from 'shared/ui'

export const ArticleList: FC = () => {
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const error = useAppSelector(getArticlesPageError)
    const view = useAppSelector(getArticlesPageView)
    const { t } = useTranslation('article')
    const errorName = t('Ошибка при загрузке статей!')
    const noArticles = t('Статьи не найдены!')
    const buttonName = t('Читать')

    const articleList = articles?.map((item) => {
        const avatar = item.user.avatar ?? noavatar
        const articleImage = item.img ?? noimage

        const block = item.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock

        const longTextBlock = `${block?.paragraphs[0]}...`
        const shortTextBlock =
            block.paragraphs[0].slice(0, block?.paragraphs[0].indexOf('.')) +
            '...'

        const textBlock =
            block !== undefined
                ? view === ArticleView.BIG
                    ? longTextBlock
                    : shortTextBlock
                : 'No text...'

        if (view === ArticleView.SMALL) {
            return (
                <ArticleListItemSmall
                    key={item.id}
                    id={item.userId}
                    avatar={avatar}
                    articleImage={articleImage}
                    date={item.createdAt}
                    views={item.views}
                    textBlock={textBlock}
                    userName={item.user.username}
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
                date={item.createdAt}
                views={item.views}
                textBlock={textBlock}
                buttonName={buttonName}
                userName={item.user.username}
            />
        )
    })

    const skeletons = new Array(view === ArticleView.BIG ? 4 : 9)
        .fill(0)
        .map((_, index) => (
            <Skeleton
                key={index}
                type={view === ArticleView.BIG ? 'articleBig' : 'articleSmall'}
            />
        ))

    const articleListCondition = isLoading ? skeletons : articleList

    const atricleListClassName =
        view === ArticleView.BIG
            ? styles.articleListBig
            : styles.articleListSmall

    if (error !== '') {
        return <div className={styles.articlesLoadError}>{errorName}</div>
    }

    if (!isLoading && articleList === undefined) {
        return <div className={styles.articlesEmpty}>{noArticles}</div>
    }

    if (!isLoading && Array.isArray(articleList) && articleList.length === 0) {
        return <div className={styles.articlesEmpty}>{noArticles}</div>
    }

    return <div className={atricleListClassName}>{articleListCondition}</div>
}
