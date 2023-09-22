import { type FC } from 'react'
import styles from './Input.module.scss'

interface InputPropsInterface {
    value: string
    onChange: () => void
    type: string
    placeholder: string
}

export const Input: FC<InputPropsInterface> = ({
    value,
    onChange,
    type,
    placeholder
}) => {
    return (
        <input
            className={styles.input}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    )
}
