import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonPropsInterface> = ({
    children,
    className,
    theme,
    ...otherProps
}) => {
    return (
        <button
            className={classNames(styles.button, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
