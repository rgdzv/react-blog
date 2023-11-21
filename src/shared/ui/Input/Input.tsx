import {
    type ReactNode,
    type FC,
    type ChangeEvent,
    type InputHTMLAttributes
} from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameIconType = 'eye-icon'
type ClassNameForLabel = 'profile_label'
type ClassNameForInput = 'profile_input'

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
    isError?: string
    classNameForLabel?: string
    classNameForInput?: string
    isLoading?: boolean
    disabled?: boolean
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
    isError,
    classNameForLabel,
    classNameForInput,
    isLoading,
    disabled,
    ...otherProps
}) => {
    const labelClassName = classNames(styles.label, {}, [
        styles[classNameForLabel as ClassNameForLabel]
    ])

    const inputClassName = classNames(
        styles.input,
        {
            [styles.error]: isError
        },
        [styles[classNameForInput as ClassNameForInput]]
    )

    const iconClassName = styles[classNameForIcon as ClassNameIconType]

    const labelCondition =
        label !== undefined ? (
            <label className={labelClassName} htmlFor={id}>
                {label}:
            </label>
        ) : null

    const showContentCondition =
        isLoading === true ? (
            <Skeleton />
        ) : (
            <>
                {labelCondition}
                <input
                    id={id}
                    className={inputClassName}
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...otherProps}
                />
                <div className={iconClassName} onClick={handleOpenEye}>
                    {children}
                </div>
            </>
        )

    return <div className={styles.inputWrapper}>{showContentCondition}</div>
}
