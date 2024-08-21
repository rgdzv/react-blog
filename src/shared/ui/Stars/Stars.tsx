import { memo, useCallback, useState } from 'react'
import type { FC } from 'react'
import { Button } from '../'
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
                    />
                </Button>
            )
        })

        return <div className={styles.ratingStars}>{stars}</div>
    }
)
