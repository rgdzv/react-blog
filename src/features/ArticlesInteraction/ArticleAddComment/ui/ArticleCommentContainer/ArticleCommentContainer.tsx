import { type FC } from 'react'
import styles from './ArticleCommentContainer.module.scss'
import { useTranslation } from 'react-i18next'
import ArticleAddComment from '../ArticleAddComment/ArticleAddComment'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getArticleCommentData } from '../../model/selectors/getArticleCommentData/getArticleCommentData'
import { ArticleComment } from 'entities_/ArticleComment'
import { noavatar, DeleteCommentIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import { getUserAuthData } from '../../../../Authorization/index'
import { deleteArticleComment } from '../../model/services/deleteArticleComment/deleteArticleComment'

export const ArticleCommentContainer: FC = () => {
    const articleCommentsData = useAppSelector(getArticleCommentData)
    const user = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const commentSectionName = t('Комментарии')

    const articleComments = articleCommentsData?.map((comment) => {
        const avatar = comment.user.avatar ?? noavatar

        const deleteComment = (): void => {
            void dispatch(deleteArticleComment(comment.id))
        }

        const icon =
            user.id === comment.userId ? (
                <Button className='deleteComment' onClick={deleteComment}>
                    <DeleteCommentIcon />
                </Button>
            ) : null

        return (
            <ArticleComment
                key={comment.id}
                avatar={avatar}
                userId={comment.user.id}
                text={comment.text}
                icon={icon}
            />
        )
    })

    return (
        <div className={styles.articleCommentContainer}>
            <p className={styles.articleCommentSection}>{commentSectionName}</p>
            <ArticleAddComment />
            {articleComments}
        </div>
    )
}
