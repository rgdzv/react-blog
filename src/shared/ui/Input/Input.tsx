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
    | 'currency'

interface InputPropsInterface extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    value: string | number | undefined
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
    min?: string
    max?: string
}

export const Input: FC<InputPropsInterface> = ({
    label,
    id,
    value,
    onChange,
    type,
    children,
    classNameForIcon,
    handleOpenEye,
    isError,
    classNameForInputWrapper,
    classNameForLabel,
    classNameForInput,
    isLoading,
    disabled,
    min,
    max,
    ...otherProps
}) => {
    const inputWrapperClassName = classNames(styles.inputWrapper, {}, [
        styles[classNameForInputWrapper as ClassNameInputWrapperType]
    ])

    const labelClassName = classNames(styles.label, {}, [
        styles[classNameForLabel as ClassNameLabelType]
    ])

    const inputClassName = classNames(
        styles.input,
        {
            [styles.error]: isError
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
                    min={min}
                    max={max}
                    {...otherProps}
                />
                <div className={iconClassName} onClick={handleOpenEye}>
                    {children}
                </div>
            </>
        )

    return <div className={inputWrapperClassName}>{showContentCondition}</div>
}
