import { type FC } from 'react'
import styles from './ArticleAddComment.module.scss'
import { Button, Input } from 'shared/ui'
import { SendComment } from 'shared/assets'

const ArticleAddComment: FC = () => {
    return (
        <div className={styles.articleAddComment}>
            <Input value='' classNameForInputWrapper='addComment' />
            <Button className='sendComment'>
                <SendComment />
            </Button>
        </div>
    )
}

export default ArticleAddComment
