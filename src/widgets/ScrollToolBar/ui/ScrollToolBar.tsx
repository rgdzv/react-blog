import type { FC } from 'react'
import { ScrollToTopButton } from 'features/ScrollToTopButton'
import styles from './ScrollToolBar.module.scss'

export const ScrollToolBar: FC = () => {
    return (
        <div className={styles.scrollToolBar}>
            <ScrollToTopButton />
        </div>
    )
}
