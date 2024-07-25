import { useCallback, type ChangeEvent, type FC, memo } from 'react'
import styles from './ArticleAddComment.module.scss'
import { Button, Input } from 'shared/ui'
import { SendCommentIcon } from 'shared/assets'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getArticleCommentText } from '../../model/selectors/getArticleCommentText/getArticleCommentText'
import { useTranslation } from 'react-i18next'
import { articleCommentsActions } from '../../model/slice/articleCommentSlice'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'

const ArticleAddComment: FC = memo(() => {
    const text = useAppSelector(getArticleCommentText)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article')
    const sendCommentInputPlaceholder = t('Напишите комментарий...')

    const onChangeInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(articleCommentsActions.setText(e.target.value))
        },
        [dispatch]
    )

    const sendComment = (): void => {
        if (text !== '') {
            void dispatch(addArticleComment(text))
            dispatch(articleCommentsActions.setText(''))
        }
    }

    return (
        <div className={styles.articleAddComment}>
            <Input
                value={text}
                classNameForInputWrapper='addComment'
                placeholder={sendCommentInputPlaceholder}
                onChange={onChangeInput}
            />
            <Button
                className='sendComment'
                onClick={sendComment}
                disabled={text === ''}
            >
                <SendCommentIcon data-testid='send-comment-icon' />
            </Button>
        </div>
    )
})

export default ArticleAddComment
