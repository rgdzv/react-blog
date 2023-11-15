import { type FC } from 'react'
import styles from './Image.module.scss'
import { classNames } from 'shared/lib'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameType = 'avatar_profile'

interface ImagePropsInterface {
    avatar?: string
    className?: ClassNameType
    alt?: string
    isLoading?: boolean
}

export const Image: FC<ImagePropsInterface> = ({
    avatar,
    className,
    alt,
    isLoading
}) => {
    const classNameFinal = classNames(styles.imageWrapper, {}, [
        styles[className as ClassNameType]
    ])
    const conditionBlock =
        isLoading ?? false ? (
            <Skeleton />
        ) : (
            <img className={styles.image} src={avatar} alt={alt} />
        )

    return <div className={classNameFinal}>{conditionBlock}</div>
}
