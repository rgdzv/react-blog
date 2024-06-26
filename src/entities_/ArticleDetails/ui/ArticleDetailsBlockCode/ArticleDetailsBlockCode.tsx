import { type ArticleCodeBlock } from '../../model/types/articleDetails'
import { useCallback, type FC, useState } from 'react'
import styles from './ArticleDetailsBlockCode.module.scss'
import { CopyIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsBlockCodePropsInterface {
    block: ArticleCodeBlock
}

export const ArticleDetailsBlockCode: FC<
    ArticleDetailsBlockCodePropsInterface
> = ({ block }) => {
    const [copySign, setCopySign] = useState('')
    const { t } = useTranslation('article')

    const copyText = useCallback(() => {
        void navigator.clipboard.writeText(block?.code)
        setCopySign(t('Copied'))

        setTimeout(() => {
            setCopySign('')
        }, 1000)
    }, [block?.code, t])

    return (
        <pre className={styles.articleBlockCode}>
            <Button className='copy' aria-label='copy code'>
                <CopyIcon onClick={copyText} data-testid='copy-icon' />
            </Button>
            <span className={styles.copySign}>{copySign}</span>
            <code>{block.code}</code>
        </pre>
    )
}
