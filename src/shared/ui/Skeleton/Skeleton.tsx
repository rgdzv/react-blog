import { type FC } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonPropsInterface {
    type?: 'articleBig' | 'articleSmall'
}

export const Skeleton: FC<SkeletonPropsInterface> = ({ type }) => {
    if (type === 'articleBig') {
        return (
            <div className={styles.articleBig}>
                <div className={styles.articleUserInfo}></div>
                <div className={styles.articleTitles}></div>
                <div className={styles.articleImage}></div>
                <div className={styles.articleText}></div>
                <div className={styles.articleFooter}></div>
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

    return <div className={styles.skeleton}></div>
}
