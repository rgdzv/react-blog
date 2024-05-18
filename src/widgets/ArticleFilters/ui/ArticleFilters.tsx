import { type FC } from 'react'
import styles from './ArticleFilters.module.scss'
import { Input } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useArticleFilters } from 'pages/ArticlesPage'
import { useTranslation } from 'react-i18next'
import { ArticlesTypeTabs } from 'features/ArticlesInteraction/ArticlesTypeTabs'

export const ArticleFilters: FC = () => {
    const { search, onChangeSearch } = useArticleFilters()
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
            <ArticlesTypeTabs />
        </div>
    )
}
