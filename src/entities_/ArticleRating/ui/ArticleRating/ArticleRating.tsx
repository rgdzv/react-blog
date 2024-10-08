import { memo } from 'react'
import type { FC } from 'react'
import { Stars } from 'shared/ui'
import styles from './ArticleRating.module.scss'

interface ArticleRatingProps {
    ratingSign: string
    rate: number
    handleRatingUpdate: (rateNumber: number) => void
}

export const ArticleRating: FC<ArticleRatingProps> = memo(
    ({ ratingSign, rate, handleRatingUpdate }) => {
        return (
            <div className={styles.articleRating} data-testid='article-rating'>
                <p className={styles.ratingOffer}>{ratingSign}</p>
                <Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />
            </div>
        )
    }
)
