import { type FC } from 'react'
import styles from './ArticleAddComment.module.scss'
import { Button, Input } from 'shared/ui'
import { SendCommentIcon } from 'shared/assets'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getArticleCommentText } from '../../model/selectors/getArticleCommentText/getArticleCommentText'
import { useTranslation } from 'react-i18next'

const ArticleAddComment: FC = () => {
    const text = useAppSelector(getArticleCommentText)
    const { t } = useTranslation('article')
    const sendCommentInputPlaceholder = t('Напишите комментарий...')

    return (
        <div className={styles.articleAddComment}>
            <Input
                value={text}
                classNameForInputWrapper='addComment'
                placeholder={sendCommentInputPlaceholder}
            />
            <Button className='sendComment'>
                <SendCommentIcon data-testid='send-comment-icon' />
            </Button>
        </div>
    )
}

export default ArticleAddComment
