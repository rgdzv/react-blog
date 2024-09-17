import { memo } from 'react'
import type { FC } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonPropsInterface {
    type?: string
}

export const Skeleton: FC<SkeletonPropsInterface> = memo(({ type }) => {
    if (type === 'profileHeader') {
        return <div className={styles.profileHeader}></div>
    }

    if (type === 'profileInput') {
        return <div className={styles.profileInput}></div>
    }

    if (type === 'articleBig') {
        return (
            <div className={styles.articleBig}>
                <div className={styles.articleUserInfoBig}></div>
                <div className={styles.articleTitlesBig}></div>
                <div className={styles.articleImageBig}></div>
                <div className={styles.articleTextBig}></div>
                <div className={styles.articleTextBig}></div>
                <div className={styles.articleFooterBig}></div>
            </div>
        )
    }

    if (type === 'articleSmall') {
        return (
            <div className={styles.articleSmall}>
                <div className={styles.articleImageSmall}></div>
                <div className={styles.articleContentSmall}>
                    <div className={styles.textBlockSmall}></div>
                    <div className={styles.footerSmall}></div>
                    <div className={styles.userInfoSmall}></div>
                </div>
            </div>
        )
    }

    if (type === 'articleDetails') {
        return (
            <div className={styles.articleDetails}>
                <div className={styles.articleUserInfoDetails}></div>
                <div className={styles.articleTitlesDetails}></div>
                <div className={styles.articleImageDetails}></div>
                <div className={styles.articleTextDetails}></div>
                <div className={styles.articleTextDetails}></div>
                <div className={styles.articleTextDetails}></div>
                <div className={styles.articleTextDetails}></div>
            </div>
        )
    }

    if (type === 'articleRating') {
        return <div className={styles.articleRating}></div>
    }

    if (type === 'articleCommentsForm') {
        return (
            <div className={styles.articleCommentsForm}>
                <div className={styles.articleCommentsFormName}></div>
                <div className={styles.articleCommentsFormInput}></div>
            </div>
        )
    }
    if (type === 'articleComments') {
        return (
            <>
                <div className={styles.articleComment}>
                    <div className={styles.articleCommentAvatar}></div>
                    <div className={styles.articleCommentText}>
                        <div className={styles.articleCommentTextLine}></div>
                        <div className={styles.articleCommentTextLine}></div>
                    </div>
                </div>
                <div className={styles.articleComment}>
                    <div className={styles.articleCommentAvatar}></div>
                    <div className={styles.articleCommentText}>
                        <div className={styles.articleCommentTextLine}></div>
                        <div className={styles.articleCommentTextLine}></div>
                    </div>
                </div>
                <div className={styles.articleComment}>
                    <div className={styles.articleCommentAvatar}></div>
                    <div className={styles.articleCommentText}>
                        <div className={styles.articleCommentTextLine}></div>
                        <div className={styles.articleCommentTextLine}></div>
                    </div>
                </div>
                <div className={styles.articleComment}>
                    <div className={styles.articleCommentAvatar}></div>
                    <div className={styles.articleCommentText}>
                        <div className={styles.articleCommentTextLine}></div>
                        <div className={styles.articleCommentTextLine}></div>
                    </div>
                </div>
                <div className={styles.articleComment}>
                    <div className={styles.articleCommentAvatar}></div>
                    <div className={styles.articleCommentText}>
                        <div className={styles.articleCommentTextLine}></div>
                        <div className={styles.articleCommentTextLine}></div>
                    </div>
                </div>
            </>
        )
    }

    return <div className={styles.skeleton}></div>
})
