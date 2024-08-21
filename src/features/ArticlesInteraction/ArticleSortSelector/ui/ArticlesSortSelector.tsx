import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import type { ArticleSortField, ArticleSortOrder } from 'entities_/Article'
import { ListBoxElement } from 'shared/ui'
import { sortOptions } from '../model/utils/sortOptions'
import { orderOptions } from '../model/utils/orderOptions'
import styles from './ArticlesSortSelector.module.scss'

interface ArticlesSortSelectorPropsInterface {
    sort: ArticleSortField
    onChangeSort: (newSort: ArticleSortField) => void
    order: ArticleSortOrder
    onChangeOrder: (newOrder: ArticleSortOrder) => void
}

export const ArticlesSortSelector: FC<ArticlesSortSelectorPropsInterface> = ({
    sort,
    onChangeSort,
    order,
    onChangeOrder
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
            <ListBoxElement
                options={orderOptions}
                onChange={onChangeOrder}
                value={order}
            />
        </div>
    )
}
