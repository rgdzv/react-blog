import { useState } from 'react'
import type { FC, ImgHTMLAttributes } from 'react'
import { Skeleton } from '../Skeleton/Skeleton'
import { classNames } from '../../lib/classNames/classNames'
import styles from './Image.module.scss'

type ClassNameType =
    | 'profile_avatar'
    | 'article_list_img'
    | 'article_list_small_img'
    | 'article_avatar'
    | 'login_dropdown_avatar'
    | 'article_details_img'
    | 'article_comment_avatar'

interface ImagePropsInterface extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    className?: ClassNameType
    alt: string
    errorImage: string
}

export const Image: FC<ImagePropsInterface> = ({
    src,
    className,
    alt,
    errorImage
}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const handleOnLoad = (): void => {
        setIsLoading(false)
    }

    const handleOnError = (): void => {
        setHasError(true)
        setIsLoading(false)
    }

    const srcCondition = hasError ? errorImage : src
    const altCondition = hasError ? 'no image found' : alt

    const skeletonCondition = isLoading && <Skeleton />

    const classNameFinal = styles[className as ClassNameType]
    const imageClassNameFinal = classNames(styles.image, {
        [styles.hidden]: isLoading
    })

    return (
        <div className={classNameFinal} data-testid='image'>
            <img
                className={imageClassNameFinal}
                src={srcCondition}
                alt={altCondition}
                onLoad={handleOnLoad}
                onError={handleOnError}
            />
            {skeletonCondition}
        </div>
    )
}
