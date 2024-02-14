import { type ReactElement, type FC } from 'react'
import styles from './MainLayout.module.scss'

interface MainLayoutPropsInterface {
    content: ReactElement
    sidebar: ReactElement
    header: ReactElement
}

export const MainLayout: FC<MainLayoutPropsInterface> = ({
    content,
    sidebar,
    header
}) => {
    return (
        <main className={styles.main}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>{header}</div>
        </main>
    )
}
