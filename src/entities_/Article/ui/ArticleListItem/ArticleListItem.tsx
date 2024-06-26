import { type FC } from 'react'
import styles from './ArticleListItem.module.scss'
import { AppLink, Button, Image } from 'shared/ui'
import { EyeIcon } from 'shared/assets'

interface ArticleListItemPropsInterface {
    avatar: string
    articleImage: string
    title: string
    subtitle: string
    date: string
    views: number
    buttonName: string
    textBlock: string
    userName: string
    id: string
    articleId: string
}

export const ArticleListItem: FC<ArticleListItemPropsInterface> = ({
    avatar,
    articleImage,
    title,
    subtitle,
    date,
    views,
    buttonName,
    textBlock,
    userName,
    id,
    articleId
}) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.userInfo}>
                <AppLink to={`/profile/${id}`} className={styles.userInfoLink}>
                    <Image
                        className='article_avatar'
                        alt='article avatar'
                        src={avatar}
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
            />
            <div className={styles.articleContent}>
                <p className={styles.text}>{textBlock}</p>
            </div>
            <div className={styles.listItemFooter}>
                <AppLink to={`/articles/${articleId}`}>
                    <Button className='bordered'>{buttonName}</Button>
                </AppLink>
                <div className={styles.views}>
                    <EyeIcon data-testid='eye-open-icon' />
                    <span>{views}</span>
                </div>
            </div>
        </div>
    )
}
