import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleFilters } from 'pages/ArticlesPage'
import { ArticlesTypeTabs } from 'features/ArticlesInteraction/ArticlesTypeTabs'
import { ArticlesSortSelector } from 'features/ArticlesInteraction/ArticleSortSelector'
import { Input } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import styles from './ArticleFilters.module.scss'

export const ArticleFilters: FC = () => {
    const {
        search,
        onChangeSearch,
        type,
        onChangeType,
        sort,
        onChangeSort,
        order,
        onChangeOrder
    } = useArticleFilters()
    const { t } = useTranslation('article')
    const inputPlaceholderName = t('Найти')

    return (
        <div className={styles.articleFilters}>
            <Input
                value={search}
                classNameForInputWrapper='search'
                placeholder={inputPlaceholderName}
                icon={<SearchIcon data-testid='search-icon' />}
                onChange={onChangeSearch}
                classNameForIcon='search'
            />
            <ArticlesTypeTabs type={type} onChangeType={onChangeType} />
            <ArticlesSortSelector
                sort={sort}
                onChangeSort={onChangeSort}
                order={order}
                onChangeOrder={onChangeOrder}
            />
        </div>
    )
}
