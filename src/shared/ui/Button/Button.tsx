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
    | 'password_eye'
    | 'navbar_icon'
    | 'theme'
    | 'lang'
    | 'toggleArrow'
    | 'bordered'
    | 'bordered_green'
    | 'bordered_red'
    | 'bordered_red_invisible'
    | 'bordered_listbox'
    | 'left_bordered'
    | 'right_bordered'
    | 'articleTab'
    | 'copy'
    | 'search'
    | 'star'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ClassNameType
    disabled?: boolean
    selected?: boolean
}

// eslint-disable-next-line react/display-name
export const Button = memo(
    forwardRef(
        (props: ButtonPropsInterface, ref: ForwardedRef<HTMLButtonElement>) => {
            const { children, className, disabled, selected, ...otherProps } =
                props

            const classNameFinal = classNames(
                styles.button,
                {
                    [styles.selected]: selected
                },
                [styles[className as ClassNameType]]
            )

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
