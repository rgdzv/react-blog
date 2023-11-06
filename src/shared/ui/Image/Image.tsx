import { type FC } from 'react'
import styles from './Image.module.scss'
import { classNames } from '../../lib/classNames/classNames'

interface ImagePropsInterface {
    className?: string
}

export const Image: FC<ImagePropsInterface> = ({ className }) => {
    const classNameFinal = classNames(styles.avatar, {}, [className as string])

    return (
        <div className={classNameFinal}>
            <img className={styles.image}></img>
        </div>
    )
}
