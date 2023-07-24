import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

export enum ButtonTheme {
    LANG = 'lang',
    RELOAD = 'reload'
}
interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ButtonTheme
}

export const Button: FC<ButtonPropsInterface> = ({
    children,
    className,
    ...otherProps
}) => {
    const classNameChecked = className ?? ''
    const classNameFinal = classNames(styles.button, {}, [
        styles[classNameChecked as ButtonTheme]
    ])

    return (
        <button type='button' className={classNameFinal} {...otherProps}>
            {children}
        </button>
    )
}
