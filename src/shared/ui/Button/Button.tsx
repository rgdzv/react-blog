import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

export enum ThemeButton {
    USUAL = 'usual',
    CLEAR = 'clear'
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
    
    const classNameChecked = className ?? ''

    return (
        <button
            className={classNames(styles.button, {}, [
                classNameChecked,
                styles[theme as ThemeButton]
            ])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
