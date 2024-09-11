import { memo, useCallback } from 'react'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { Button, Input } from 'shared/ui'
import { SendCommentIcon } from 'shared/assets'
import { getArticleCommentText } from '../../model/selectors/getArticleCommentText/getArticleCommentText'
import { articleCommentsActions } from '../../model/slice/articleCommentSlice'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'
import styles from './ArticleAddComment.module.scss'

export const ArticleAddComment: FC = memo(() => {
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

    const sendComment = useCallback((): void => {
        if (text !== '') {
            void dispatch(addArticleComment(text))
            dispatch(articleCommentsActions.setText(''))
        }
    }, [dispatch, text])

    const sendCommentOnEnter = useCallback(
        (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key === 'Enter' && text !== '') {
                void dispatch(addArticleComment(text))
                dispatch(articleCommentsActions.setText(''))
            }
        },
        [dispatch, text]
    )

    return (
        <div className={styles.articleAddComment}>
            <Input
                value={text}
                classNameForInputWrapper='addComment'
                placeholder={sendCommentInputPlaceholder}
                onChange={onChangeInput}
                onKeyDown={sendCommentOnEnter}
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
