import { type FC } from 'react'
import styles from './Image.module.scss'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameType =
    | 'profile_avatar'
    | 'article_list_img'
    | 'article_list_small_img'
    | 'article_avatar'
    | 'login_dropdown_avatar'
    | 'article_details_img'
    | 'article_comment_avatar'

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
    const classNameFinal = styles[className as ClassNameType]

    const showContentCondition =
        isLoading === true ? (
            <Skeleton />
        ) : (
            <img className={styles.image} src={src} alt={alt} />
        )

    return <div className={classNameFinal}>{showContentCondition}</div>
}
