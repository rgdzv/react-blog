import { type FC } from 'react'
import styles from './ArticleFilters.module.scss'
import { Input } from 'shared/ui'
import { SearchIcon } from 'shared/assets'

export const ArticleFilters: FC = () => {
    return (
        <div className={styles.articleFilters}>
            <Input
                value='abcd'
                classNameForInput='search_input'
                placeholder='Найти'
                icon={<SearchIcon data-testid='search-icon' />}
            />
        </div>
    )
}
