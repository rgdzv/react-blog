import { type FC } from 'react'
import styles from './ArticleFilters.module.scss'
import { Input } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useArticleFilters } from 'pages/ArticlesPage'
import { useTranslation } from 'react-i18next'
import { ArticlesTypeTabs } from 'features/ArticlesInteraction/ArticlesTypeTabs'
import { ArticlesSortSelector } from 'features/ArticlesInteraction/ArticleSortSelector'

export const ArticleFilters: FC = () => {
    const { search, onChangeSearch, type, onChangeType, sort, onChangeSort } =
        useArticleFilters()
    const { t } = useTranslation('article')

    return (
        <div className={styles.articleFilters}>
            <Input
                value={search}
                classNameForInput='search_input'
                classNameForInputWrapper='search'
                placeholder={t('Найти')}
                icon={<SearchIcon data-testid='search-icon' />}
                onChange={onChangeSearch}
            />
            <ArticlesTypeTabs type={type} onChangeType={onChangeType} />
            <ArticlesSortSelector sort={sort} onChangeSort={onChangeSort} />
        </div>
    )
}
