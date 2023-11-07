import { type FC } from 'react'
import styles from './Image.module.scss'

interface ImagePropsInterface {
    avatar: string
}

export const Image: FC<ImagePropsInterface> = ({ avatar }) => {
    return (
        <div className={styles.avatar}>
            <img className={styles.image} src={avatar} />
        </div>
    )
}
