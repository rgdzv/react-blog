import { memo } from 'react'
import type { FC, InputHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import { Skeleton } from '../Skeleton/Skeleton'
import { Button } from '../Button/Button'
import styles from './Input.module.scss'

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
    | 'addComment'

type ClassNameIconType = 'password_eye' | 'search'

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
    classNameForIcon?: ClassNameIconType
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
        classNameForIcon,
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
            <Button className={classNameForIcon} onClick={onClick}>
                {icon}
            </Button>
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
