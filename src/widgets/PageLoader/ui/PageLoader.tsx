import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Loader } from 'shared/ui'
import styles from './PageLoader.module.scss'

interface PageLoaderPropsInterface {
    className?: string
}

export const PageLoader: FC<PageLoaderPropsInterface> = ({ className }) => {

    const classNameChecked = className ?? ''

    return (
        <div className={classNames(styles.pageLoader, {}, [classNameChecked])}>
            <Loader/>
        </div>
    )
}
