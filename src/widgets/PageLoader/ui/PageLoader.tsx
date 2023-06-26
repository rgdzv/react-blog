import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Loader } from 'shared/ui'
import styles from './PageLoader.module.scss'

interface PageLoaderPropsInterface {
    className?: string
}

export const PageLoader: FC<PageLoaderPropsInterface> = ({ className }) => {

    const classNameChecked = className ?? ''
    const classNameFinal = classNames(styles.pageLoader, {}, [classNameChecked])

    return (
        <div className={classNameFinal}>
            <Loader/>
        </div>
    )
}
