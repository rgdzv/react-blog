import {
    type ReactNode,
    type FC,
    type ChangeEvent,
    type InputHTMLAttributes
} from 'react'
import styles from './Input.module.scss'

type ClassNameIconType = 'icon-right'
interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    placeholder: string
    children?: ReactNode
    classNameIcon?: string
    handleOpenEye?: () => void
}

export const Input: FC<InputPropsInterface> = ({
    value,
    onChange,
    type = 'text',
    placeholder,
    children,
    classNameIcon,
    handleOpenEye,
    ...otherProps
}) => {
    const classNameCheked = classNameIcon ?? ''
    const iconClassName = styles[classNameCheked as ClassNameIconType]

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={iconClassName} onClick={handleOpenEye}>
                {children}
            </div>
        </div>
    )
}
