import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { ArticleComment } from 'entities_/ArticleComment'
import { DeleteCommentIcon } from 'shared/assets'
import { Button, Skeleton } from 'shared/ui'
import { ArticleAddComment } from '../ArticleAddComment/ArticleAddComment'
import { getUserAuthData } from '../../../../Authorization'
import { deleteArticleComment } from '../../model/services/deleteArticleComment/deleteArticleComment'
import { getArticleCommentIsLoading } from '../../model/selectors/getArticleCommentIsLoading/getArticleCommentIsLoading'
import { getArticleCommentError } from '../../model/selectors/getArticleCommentError/getArticleCommentError'
import { getArticleCommentsData } from '../../model/slice/articleCommentSlice'
import styles from './ArticleCommentContainer.module.scss'

export const ArticleCommentContainer: FC = () => {
    const articleCommentsData = useAppSelector(getArticleCommentsData.selectAll)
    const isLoadingComments = useAppSelector(getArticleCommentIsLoading)
    const commentError = useAppSelector(getArticleCommentError)
    const user = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const commentSectionName = t('Комментарии')
    const commentErrorName = t('Ошибка при загрузке комментариев!')

    const articleComments = articleCommentsData?.map((comment) => {
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
                avatar={comment.user.avatar as string}
                userId={comment.user.id}
                text={comment.text}
                icon={icon}
            />
        )
    })

    const articleCommentsCondition = isLoadingComments ? (
        <Skeleton type='articleComments' />
    ) : (
        articleComments
    )

    if (commentError !== '') {
        return (
            <div className={styles.articleCommentContainerError}>
                {commentErrorName}
            </div>
        )
    }

    return (
        <div className={styles.articleCommentContainer}>
            <p className={styles.articleCommentSection}>{commentSectionName}</p>
            <ArticleAddComment />
            {articleCommentsCondition}
        </div>
    )
}
