import { type FC } from 'react'
import styles from './Image.module.scss'
import { classNames } from 'shared/lib'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameType = 'avatar_profile' | 'article_list_img' | 'article_avatar'

interface ImagePropsInterface {
    src?: string
    className?: ClassNameType
    alt?: string
    isLoading?: boolean
}

export const Image: FC<ImagePropsInterface> = ({
    src,
    className,
    alt,
    isLoading
}) => {
    const classNameFinal = classNames(styles.imageWrapper, {}, [
        styles[className as ClassNameType]
    ])
    const showContentCondition =
        isLoading !== undefined ? (
            <Skeleton />
        ) : (
            <img className={styles.image} src={src} alt={alt} />
        )

    return <div className={classNameFinal}>{showContentCondition}</div>
}
