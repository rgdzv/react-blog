import {
    type ReactNode,
    type FC,
    type ChangeEvent,
    type InputHTMLAttributes
} from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib'

type ClassNameIconType = 'eye-icon'
type classNameForLabel = 'profile_label'
type classNameForInput = 'profile_input'

interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
    placeholder: string
    children?: ReactNode
    classNameForIcon?: string
    handleOpenEye?: () => void
    classNameForError?: string
    classNameForLabel?: string
    classNameForInput?: string
}

export const Input: FC<InputPropsInterface> = ({
    label,
    id,
    value,
    onChange,
    type = 'text',
    placeholder,
    children,
    classNameForIcon,
    handleOpenEye,
    classNameForError,
    classNameForLabel,
    classNameForInput,
    ...otherProps
}) => {
    const labelClassName = classNames(styles.label, {}, [
        styles[classNameForLabel as classNameForLabel]
    ])

    const inputClassName = classNames(
        styles.input,
        {
            [styles.error]: classNameForError
        },
        [styles[classNameForInput as classNameForInput]]
    )

    const iconClassName = styles[classNameForIcon as ClassNameIconType]

    const labelCondition =
        label !== undefined ? (
            <label className={labelClassName} htmlFor={id}>
                {label}:
            </label>
        ) : null

    return (
        <div className={styles.inputWrapper}>
            {labelCondition}
            <input
                id={id}
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
