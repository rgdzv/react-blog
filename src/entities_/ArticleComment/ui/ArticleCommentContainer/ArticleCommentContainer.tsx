import { type FC } from 'react'
import styles from './ArticleCommentContainer.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleAddComment } from 'features/ArticlesInteraction/ArticleAddComment'

export const ArticleCommentContainer: FC = () => {
    const { t } = useTranslation('article')
    const commentSectionName = t('Комментарии')

    return (
        <div className={styles.articleCommentContainer}>
            <p className={styles.articleCommentSection}>{commentSectionName}</p>
            <ArticleAddComment />
        </div>
    )
}
