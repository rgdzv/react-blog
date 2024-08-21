import { memo } from 'react'
import type { FC } from 'react'
import { AppLink, Image } from 'shared/ui'
import { noavatar } from 'shared/assets'
import styles from './ArticleComment.module.scss'

interface ArticleCommentPropsInterface {
    avatar: string
    userId: string
    text: string
    icon: JSX.Element | null
}

export const ArticleComment: FC<ArticleCommentPropsInterface> = memo(
    ({ avatar, userId, text, icon }) => {
        return (
            <div className={styles.articleComment}>
                <AppLink to={`/profile/${userId}`}>
                    <Image
                        className='article_comment_avatar'
                        alt='article comment avatar'
                        src={avatar}
                        errorImage={noavatar}
                    />
                </AppLink>
                <p className={styles.articleCommentText}>{text}</p>
                {icon}
            </div>
        )
    }
)
