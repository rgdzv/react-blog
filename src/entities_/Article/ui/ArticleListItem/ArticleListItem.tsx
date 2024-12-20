import { memo } from 'react'
import type { FC } from 'react'
import { AppLink, Button, Image } from 'shared/ui'
import { EyeIcon, noavatar, noimage } from 'shared/assets'
import { RoutesType } from 'shared/types'
import styles from './ArticleListItem.module.scss'

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
    svgTitle: string
}

export const ArticleListItem: FC<ArticleListItemPropsInterface> = memo(
    ({
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
        articleId,
        svgTitle
    }) => {
        return (
            <div className={styles.listItem} data-testid='article-list-item'>
                <div className={styles.userInfo}>
                    <AppLink
                        to={`/${RoutesType.PROFILE}/${id}`}
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
                <div className={styles.articleContent}>
                    <p className={styles.text}>{textBlock}</p>
                </div>
                <div className={styles.listItemFooter}>
                    <AppLink to={`/${RoutesType.ARTICLES}/${articleId}`}>
                        <Button className='bordered'>{buttonName}</Button>
                    </AppLink>
                    <div className={styles.views}>
                        <EyeIcon data-testid='eye-open-icon' title={svgTitle} />
                        <span>{views}</span>
                    </div>
                </div>
            </div>
        )
    }
)
