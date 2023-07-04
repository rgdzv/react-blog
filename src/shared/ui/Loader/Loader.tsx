import { type FC } from 'react'
import styles from './Loader.module.scss'

export const Loader: FC = () => {
    return <span className={styles.loader} data-testid="loader"></span>
}
