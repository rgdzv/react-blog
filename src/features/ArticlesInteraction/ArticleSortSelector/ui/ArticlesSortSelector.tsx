import { type FC } from 'react'
import styles from './ArticlesSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { ListBoxElement } from 'shared/ui'
import { sortOptions } from '../model/utils/sortOptions'
import { type ArticleSortField } from 'entities_/Article'

interface ArticlesSortSelectorPropsInterface {
    sort: ArticleSortField
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticlesSortSelector: FC<ArticlesSortSelectorPropsInterface> = ({
    sort,
    onChangeSort
}) => {
    const { t } = useTranslation('article')
    const sortSign = t('Сортировать по:')

    return (
        <div className={styles.articleSortSelector}>
            <div className={styles.sortSign}>{sortSign}</div>
            <ListBoxElement
                options={sortOptions}
                onChange={onChangeSort}
                value={sort}
                classNameForListBox='articleSort'
            />
        </div>
    )
}
