import { type FC } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { noavatar, noimage } from 'shared/assets'
import { useSelector } from 'react-redux'
import {
    getArticlesPageData,
    getArticlesPageError
    // getArticlesPageIsLoading
} from 'pages/ArticlesPage'
import { useTranslation } from 'react-i18next'
import styles from './ArticleList.module.scss'
import { type ArticleTextBlock } from '../../model/types/article'

/* eslint-disable @typescript-eslint/no-empty-interface */

interface ArticleListPropsInterface {}

export const ArticleList: FC<ArticleListPropsInterface> = () => {
    const articles = useSelector(getArticlesPageData)
    // const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const { t } = useTranslation('article')
    const errorName = t('Ошибка при загрузке статей!')
    const buttonName = t('Читать')

    const avatar = noavatar

    const articleList = articles?.map((item) => {
        const articleImage = item.img ?? noimage

        const block = item.blocks?.find(
            (block) => block.type === 'TEXT'
        ) as ArticleTextBlock

        const textBlock =
            block !== undefined ? `${block?.paragraphs[0]}...` : '...'

        return (
            <ArticleListItem
                key={item.id}
                avatar={avatar}
                articleImage={articleImage}
                title={item.title}
                subtitle={item.subtitle}
                date={item.createdAt}
                views={item.views}
                textBlock={textBlock}
                buttonName={buttonName}
            />
        )
    })

    if (error !== '') {
        return <div className={styles.articlesLoadError}>{errorName}</div>
    }

    return (
        <>
            <div></div>
            <div className={styles.articleList}>{articleList}</div>
            <div></div>
        </>
    )
}
