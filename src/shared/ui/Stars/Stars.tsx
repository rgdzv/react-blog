import { useState, type FC } from 'react'
import styles from './Stars.module.scss'
import { Button } from '../Button/Button'
import { StarIcon } from 'shared/assets'
import { classNames } from 'shared/lib'

const starsNumber = [1, 2, 3, 4, 5]

export const Stars: FC = () => {
    const [currentStarsCount, setCurrentStarsCount] = useState(0)
    const [isSelected] = useState(0)

    const onHover = (starsCount: number) => () => {
        if (isSelected === 0) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = (): void => {
        if (isSelected === 0) {
            setCurrentStarsCount(0)
        }
    }

    const stars = starsNumber.map((star) => {
        const classNameFinal = classNames(null, {}, [
            currentStarsCount >= star ? styles.hovered : styles.normal
        ])

        return (
            <Button key={star}>
                <StarIcon
                    className={classNameFinal}
                    onMouseEnter={onHover(star)}
                    onMouseLeave={onLeave}
                />
            </Button>
        )
    })

    return <div className={styles.ratingStars}>{stars}</div>
}
