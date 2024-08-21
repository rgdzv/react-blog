import type { FC } from 'react'
import { Loader } from 'shared/ui'
import styles from './PageLoader.module.scss'

export const PageLoader: FC = () => {
    return (
        <div className={styles.pageLoader} data-testid='pageLoader'>
            <Loader />
        </div>
    )
}
