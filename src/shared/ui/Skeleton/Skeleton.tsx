import { type FC } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonPropsInterface {
    type?: string
}

export const Skeleton: FC<SkeletonPropsInterface> = ({ type }) => {
    if (type === 'articleBig') {
        return (
            <div className={styles.articleBig}>
                <div className={styles.articleUserInfoBig}></div>
                <div className={styles.articleTitlesBig}></div>
                <div className={styles.articleImageBig}></div>
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
            <div className={styles.articleBig} style={{ padding: '0' }}>
                <div className={styles.articleUserInfoBig}></div>
                <div className={styles.articleTitlesBig}></div>
                <div className={styles.articleImageBig}></div>
                <div className={styles.articleTextBig}></div>
                <div className={styles.articleTextBig}></div>
                <div className={styles.articleTextBig}></div>
                <div className={styles.articleTextBig}></div>
            </div>
        )
    }

    if (type === 'profileHeader') {
        return <div className={styles.profileHeader}></div>
    }

    if (type === 'profileInput') {
        return <div className={styles.profileInput}></div>
    }

    return <div className={styles.skeleton}></div>
}
