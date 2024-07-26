import { memo, type FC } from 'react'
import styles from './ArticleRating.module.scss'
import { Stars } from 'shared/ui'

interface ArticleRatingProps {
    ratingSign: string
    rate: number
    handleRatingUpdate: (rateNumber: number) => void
}

export const ArticleRating: FC<ArticleRatingProps> = memo(
    ({ ratingSign, rate, handleRatingUpdate }) => {
        return (
            <div className={styles.articleRating}>
                <p className={styles.ratingOffer}>{ratingSign}</p>
                <Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />
            </div>
        )
    }
)
