import { type ArticleCodeBlock } from '../../model/types/article'
import { useCallback, type FC } from 'react'
import styles from './ArticleDetailsBlockCode.module.scss'
import { CopyIcon } from 'shared/assets'
import { Button } from 'shared/ui'

interface ArticleDetailsBlockCodePropsInterface {
    block: ArticleCodeBlock
}

export const ArticleDetailsBlockCode: FC<
    ArticleDetailsBlockCodePropsInterface
> = ({ block }) => {
    const copyText = useCallback(() => {
        void navigator.clipboard.writeText(block?.code)
    }, [block?.code])

    return (
        <pre className={styles.articleBlockCode}>
            <Button className='copy'>
                <CopyIcon onClick={copyText} data-testid='copy-icon' />
            </Button>
            <code>{block.code}</code>
        </pre>
    )
}
