import { type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './Loader.module.scss'
interface LoaderPropsInterface {
    className?: string
}

export const Loader: FC<LoaderPropsInterface> = ({ className }) => {
    const classNameChecked = className ?? ''
    const classNameFinal = classNames(styles.loader, {}, [classNameChecked])

    return <span className={classNameFinal}></span>
}
