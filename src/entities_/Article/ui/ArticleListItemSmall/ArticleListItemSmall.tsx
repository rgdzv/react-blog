import { type FC } from 'react'
import styles from './ArticleListItemSmall.module.scss'
import { AppLink, Image } from 'shared/ui'
import { EyeIcon } from 'shared/assets'

interface ArticleListItemSmallPropsInterface {
    avatar: string
    articleImage: string
    date: string
    views: number
    textBlock: string
    userName: string
    id: string
}

export const ArticleListItemSmall: FC<ArticleListItemSmallPropsInterface> = ({
    avatar,
    articleImage,
    date,
    views,
    textBlock,
    userName,
    id
}) => {
    return (
        <div className={styles.listItemSmall}>
            <AppLink to='/' className={styles.articleImageSmall}>
                <Image
                    className='article_list_small_img'
                    alt='article image'
                    src={articleImage}
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
                    />
                    <span className={styles.userNameSmall}>{userName}</span>
                </AppLink>
            </div>
        </div>
    )
}
