import {
    type ForwardedRef,
    type ButtonHTMLAttributes,
    type ReactNode,
    forwardRef,
    memo
} from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

type ClassNameType =
    | 'lang'
    | 'bordered'
    | 'bordered_green'
    | 'bordered_red'
    | 'bordered_red_invisible'
    | 'bordered_currency'
    | 'left_bordered'
    | 'right_bordered'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ClassNameType
    disabled?: boolean
}

// eslint-disable-next-line react/display-name
export const Button = memo(
    forwardRef(
        (props: ButtonPropsInterface, ref: ForwardedRef<HTMLButtonElement>) => {
            const { children, className, disabled, ...otherProps } = props

            const classNameFinal = classNames(styles.button, {}, [
                styles[className as ClassNameType]
            ])

            return (
                <button
                    type='button'
                    className={classNameFinal}
                    disabled={disabled}
                    ref={ref}
                    {...otherProps}
                >
                    {children}
                </button>
            )
        }
    )
)
