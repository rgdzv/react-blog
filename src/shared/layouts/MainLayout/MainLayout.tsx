import type { FC, ReactElement } from 'react'
import styles from './MainLayout.module.scss'

interface MainLayoutPropsInterface {
    content: ReactElement
    sidebar: ReactElement
    header: ReactElement
    toolbar?: ReactElement
}

export const MainLayout: FC<MainLayoutPropsInterface> = ({
    content,
    sidebar,
    header,
    toolbar
}) => {
    const toolbarCondition = toolbar !== undefined ? toolbar : null
    return (
        <main className={styles.main}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                {header}
                {toolbarCondition}
            </div>
        </main>
    )
}
