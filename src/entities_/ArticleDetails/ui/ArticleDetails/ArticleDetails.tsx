import type { FC } from 'react'
import { AppLink, Image } from 'shared/ui'
import { noavatar, noimage } from 'shared/assets'
import styles from './ArticleDetails.module.scss'

interface ArticleDetailsPropsInterface {
    profileId: string
    avatar: string
    articleImage: string
    userName: string
    date: string
    title: string
    subtitle: string
    contentBlock: Array<JSX.Element | null>
}

export const ArticleDetails: FC<ArticleDetailsPropsInterface> = ({
    profileId,
    avatar,
    articleImage,
    userName,
    date,
    title,
    subtitle,
    contentBlock
}) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.userInfo}>
                <AppLink
                    to={`/profile/${profileId}`}
                    className={styles.userInfoLink}
                >
                    <Image
                        className='article_avatar'
                        alt='article avatar'
                        src={avatar}
                        errorImage={noavatar}
                    />
                    <span className={styles.userName}>{userName}</span>
                </AppLink>
                <span className={styles.creationDate}>{date}</span>
            </div>
            <div className={styles.articleTitles}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <Image
                className='article_list_img'
                alt='article image'
                src={articleImage}
                errorImage={noimage}
            />
            <div className={styles.articleContent}>{contentBlock}</div>
        </div>
    )
}
