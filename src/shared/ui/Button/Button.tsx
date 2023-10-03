import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

type ClassNameType = 'lang' | 'bordered'
interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ClassNameType
    disabled?: boolean
}

export const Button: FC<ButtonPropsInterface> = ({
    children,
    className,
    disabled,
    ...otherProps
}) => {
    const classNameFinal = classNames(styles.button, {}, [
        styles[className as ClassNameType]
    ])

    return (
        <button
            type='button'
            className={classNameFinal}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
