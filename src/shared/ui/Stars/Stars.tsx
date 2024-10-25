import { memo, useCallback, useState } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import { StarIcon } from '../../assets'
import styles from './Stars.module.scss'

const starsNumber = [1, 2, 3, 4, 5]

interface StarsComponentInterface {
    rate: number
    handleRatingUpdate: (rate: number) => void
}

export const Stars: FC<StarsComponentInterface> = memo(
    ({ rate, handleRatingUpdate }) => {
        const [currentStarsCount, setCurrentStarsCount] = useState(rate)
        const { t } = useTranslation('article')
        const svgTitle = t('Звезда')

        const onLeave = useCallback(() => {
            setCurrentStarsCount(rate)
        }, [rate])

        const stars = starsNumber.map((star) => {
            const classNameFinal =
                currentStarsCount >= star ? styles.hovered : styles.normal

            const onHover = (): void => {
                setCurrentStarsCount(star)
            }

            const onClick = (): void => {
                handleRatingUpdate(star)
            }

            return (
                <Button key={star} onClick={onClick}>
                    <StarIcon
                        className={classNameFinal}
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                        data-testid='star-icon'
                        title={svgTitle}
                    />
                </Button>
            )
        })

        return (
            <div className={styles.ratingStars} data-testid='stars'>
                {stars}
            </div>
        )
    }
)
