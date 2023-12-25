import { type ReactNode, type FC, type InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib'
import { Skeleton } from '../Skeleton/Skeleton'

type ClassNameIconType = 'eye-icon'
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
    id?: string
    value: string
    type?: string
    children?: ReactNode
    classNameForIcon?: string
    handleOpenEye?: () => void
    isError?: string
    classNameForInputWrapper?: string
    classNameForLabel?: string
    classNameForInput?: string
    isLoading?: boolean
    disabled?: boolean
    validError?: string
}

export const Input: FC<InputPropsInterface> = ({
    label,
    id,
    value,
    onChange,
    type = 'text',
    children,
    classNameForIcon,
    handleOpenEye,
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
                    name={id}
                    className={inputClassName}
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={label}
                    disabled={disabled}
                    {...otherProps}
                />
                <div className={iconClassName} onClick={handleOpenEye}>
                    {children}
                </div>
            </>
        )

    const errorCondition = validError !== '' && (
        <span className={styles.validErrorBlock}>{validError}</span>
    )

    return (
        <>
            <div className={inputWrapperClassName}>{showContentCondition}</div>
            {errorCondition}
        </>
    )
}
