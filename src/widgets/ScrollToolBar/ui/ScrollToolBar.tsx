import { memo, type FC } from 'react'
import { ScrollToTopButton } from 'features/ScrollToTopButton'
import styles from './ScrollToolBar.module.scss'

export const ScrollToolBar: FC = memo(() => {
    return (
        <div className={styles.scrollToolBar}>
            <ScrollToTopButton />
        </div>
    )
})
