import { memo } from 'react'
import type { FC } from 'react'
import styles from './ArticleDetailsBlockText.module.scss'
import type { ArticleTextBlock } from '../../model/types/articleDetails'

interface ArticleDetailsBlockTextPropsInterface {
    block: ArticleTextBlock
}

export const ArticleDetailsBlockText: FC<ArticleDetailsBlockTextPropsInterface> =
    memo(({ block }) => {
        return (
            <div className={styles.articleBlockText}>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                <p className={styles.blockParagraph}>{block.paragraph}</p>
            </div>
        )
    })
