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

export const ArticleList: FC = () => {
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const error = useAppSelector(getArticlesPageError)
    const view = useAppSelector(getArticlesPageView)
    const { t } = useTranslation('article')
    const errorName = t('Ошибка при загрузке статей!')
    const buttonName = t('Читать')

    const articleList = articles?.map((item) => {
        const avatar = item.user.avatar ?? noavatar
        const articleImage = item.img ?? noimage

        const block = item.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock

        const textBlock =
            block !== undefined ? `${block?.paragraphs[0]}...` : 'No text...'

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
                isLoading={isLoading}
                view={view}
            />
        )
    })

    const atricleListClassName =
        view === ArticleView.BIG
            ? styles.articleListBig
            : styles.articleListSmall

    if (error !== '') {
        return <div className={styles.articlesLoadError}>{errorName}</div>
    }

    return <div className={atricleListClassName}>{articleList}</div>
}
