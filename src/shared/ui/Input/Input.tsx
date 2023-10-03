import {
    type ReactNode,
    type FC,
    type ChangeEvent,
    type InputHTMLAttributes
} from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib'

type ClassNameIconType = 'eye-icon'
interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    placeholder: string
    children?: ReactNode
    classNameForIcon?: string
    handleOpenEye?: () => void
    classNameForError?: string
}

export const Input: FC<InputPropsInterface> = ({
    value,
    onChange,
    type = 'text',
    placeholder,
    children,
    classNameForIcon,
    handleOpenEye,
    classNameForError,
    ...otherProps
}) => {
    const inputClassName = classNames(styles.input, {
        [styles.error]: classNameForError
    })

    const iconClassName = styles[classNameForIcon as ClassNameIconType]

    return (
        <div className={styles.inputWrapper}>
            <input
                className={inputClassName}
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
