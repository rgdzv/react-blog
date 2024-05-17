import { type ReactNode, type FC, type InputHTMLAttributes, memo } from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameIconType = 'eye'
type ClassNameLabelType = 'profile_label'
type ClassNameInputType = 'profile_input'
type ClassNameInputWrapperType =
    | 'firstname'
    | 'lastname'
    | 'age'
    | 'city'
    | 'username'
    | 'avatar'

interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder?: string
    id?: string
    value: string
    type?: string
    icon?: ReactNode
    classNameForIcon?: string
    onClick?: () => void
    isError?: string
    classNameForInputWrapper?: string
    classNameForLabel?: string
    classNameForInput?: string
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
        classNameForIcon,
        onClick,
        isError,
        classNameForInputWrapper,
        classNameForLabel,
        classNameForInput,
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

        const labelClassName = classNames(styles.label, {}, [
            styles[classNameForLabel as ClassNameLabelType]
        ])

        const inputClassName = classNames(
            styles.input,
            {
                [styles.error]: isError ?? validError
            },
            [styles[classNameForInput as ClassNameInputType]]
        )

        const iconClassName = classNames(styles.icon, {}, [
            styles[classNameForIcon as ClassNameIconType]
        ])

        const labelCondition = label !== undefined && (
            <label className={labelClassName} htmlFor={id}>
                {label}:
            </label>
        )

        const iconCondition = icon !== undefined && (
            <div className={iconClassName} onClick={onClick}>
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
