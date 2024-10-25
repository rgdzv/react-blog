import { memo, useCallback, useState } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CopyIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import styles from './ArticleDetailsBlockCode.module.scss'
import type { ArticleCodeBlock } from '../../model/types/articleDetails'

interface ArticleDetailsBlockCodePropsInterface {
    block: ArticleCodeBlock
}

export const ArticleDetailsBlockCode: FC<ArticleDetailsBlockCodePropsInterface> =
    memo(({ block }) => {
        const [copySign, setCopySign] = useState('')
        const { t } = useTranslation('article')
        const svgTitle = t('Копировать')

        const copyText = useCallback(() => {
            void navigator.clipboard.writeText(block?.code)
            setCopySign(t('Copied'))

            setTimeout(() => {
                setCopySign('')
            }, 1000)
        }, [block?.code, t])

        return (
            <pre
                className={styles.articleBlockCode}
                data-testid='article-block-code'
            >
                <Button className='copy' aria-label='copy code'>
                    <CopyIcon
                        onClick={copyText}
                        data-testid='copy-icon'
                        title={svgTitle}
                    />
                </Button>
                <span className={styles.copySign}>{copySign}</span>
                <code>{block.code}</code>
            </pre>
        )
    })
