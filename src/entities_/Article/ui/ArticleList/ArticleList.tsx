import { type FC } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { noavatar, noimage } from 'shared/assets'
import { useSelector } from 'react-redux'
import { getArticlesPageError } from 'pages/ArticlesPage'
import { useTranslation } from 'react-i18next'
import styles from './ArticleList.module.scss'

/* eslint-disable @typescript-eslint/no-empty-interface */

interface ArticleListPropsInterface {}

export const ArticleList: FC<ArticleListPropsInterface> = () => {
    // const articles = useSelector(getArticlesPageData)
    // const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const { t } = useTranslation('article')
    const errorName = t('Ошибка при загрузке статей!')

    const avatar = noavatar
    const articleImage = noimage

    if (error !== '') {
        return <div className={styles.articlesLoadError}>{errorName}</div>
    }

    return <ArticleListItem avatar={avatar} articleImage={articleImage} />
}
