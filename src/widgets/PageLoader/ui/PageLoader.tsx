import { memo } from 'react'
import type { FC } from 'react'
import { Loader } from 'shared/ui'
import { classNames } from 'shared/lib'
import styles from './PageLoader.module.scss'

type PageLoaderClassNameType = 'main'

interface PageLoaderProps {
    className?: PageLoaderClassNameType
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }) => {
    const classNameFinal = classNames(styles.pageLoader, {}, [
        styles[className as PageLoaderClassNameType]
    ])
    return (
        <div className={classNameFinal} data-testid='pageLoader'>
            <Loader />
        </div>
    )
})
