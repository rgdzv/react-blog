import type { FC } from 'react'
import { AppLink, Image } from 'shared/ui'
import { EyeIcon, noavatar, noimage } from 'shared/assets'
import styles from './ArticleListItemSmall.module.scss'

interface ArticleListItemSmallPropsInterface {
    avatar: string
    articleImage: string
    date: string
    views: number
    textBlock: string
    userName: string
    id: string
    articleId: string
}

export const ArticleListItemSmall: FC<ArticleListItemSmallPropsInterface> = ({
    avatar,
    articleImage,
    date,
    views,
    textBlock,
    userName,
    id,
    articleId
}) => {
    return (
        <div className={styles.listItemSmall}>
            <AppLink
                to={`/articles/${articleId}`}
                className={styles.articleImageSmall}
            >
                <Image
                    className='article_list_small_img'
                    alt='article image'
                    src={articleImage}
                    errorImage={noimage}
                />
            </AppLink>
            <div className={styles.textBlockSmall}>
                <p className={styles.textSmall}>{textBlock}</p>
            </div>
            <div className={styles.footerSmall}>
                <span className={styles.creationDateSmall}>{date}</span>
                <div className={styles.viewsSmall}>
                    <EyeIcon data-testid='eye-open-icon' />
                    <span>{views}</span>
                </div>
            </div>
            <div className={styles.userInfoSmall}>
                <AppLink
                    to={`/profile/${id}`}
                    className={styles.userInfoLinkSmall}
                >
                    <Image
                        className='article_avatar'
                        alt='article avatar'
                        src={avatar}
                        errorImage={noavatar}
                    />
                    <span className={styles.userNameSmall}>{userName}</span>
                </AppLink>
            </div>
        </div>
    )
}
