import { type ReactNode, type FC, type InputHTMLAttributes, memo } from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameInputWrapperType =
    | 'login_username'
    | 'login_password'
    | 'firstname'
    | 'lastname'
    | 'age'
    | 'city'
    | 'username'
    | 'avatar'
    | 'search'

interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder?: string
    id?: string
    value: string
    type?: string
    icon?: ReactNode
    onClick?: () => void
    isError?: string
    classNameForInputWrapper?: ClassNameInputWrapperType
    isLoading?: boolean
    disabled?: boolean
    validError?: string
}

export const Input: FC<InputPropsInterface> = memo(
    ({
        label,
        placeholder,
        id,
        value,
        onChange,
        type = 'text',
        icon,
        onClick,
        isError,
        classNameForInputWrapper,
        isLoading,
        disabled,
        validError,
        ...otherProps
    }) => {
        const inputWrapperClassName = classNames(
            styles.inputWrapper,
            {
                [styles.withError]: validError
            },
            [styles[classNameForInputWrapper as ClassNameInputWrapperType]]
        )

        const inputClassName = classNames(styles.input, {
            [styles.error]: isError ?? validError
        })

        const labelCondition = label !== undefined && (
            <label className={styles.label} htmlFor={id}>
                {label}:
            </label>
        )

        const iconCondition = icon !== undefined && (
            <div className={styles.icon} onClick={onClick}>
                {icon}
            </div>
        )

        const showContentCondition =
            isLoading === true ? (
                <Skeleton type='profileInput' />
            ) : (
                <>
                    {labelCondition}
                    <input
                        id={id}
                        name={id}
                        className={inputClassName}
                        value={value}
                        onChange={onChange}
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        {...otherProps}
                    />
                    {iconCondition}
                </>
            )

        const errorCondition = validError !== '' &&
            validError !== undefined && (
                <span className={styles.validErrorBlock}>{validError}</span>
            )

        return (
            <>
                <div className={inputWrapperClassName}>
                    {showContentCondition}
                </div>
                {errorCondition}
            </>
        )
    }
)
