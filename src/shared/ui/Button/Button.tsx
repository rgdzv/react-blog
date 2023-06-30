import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

export enum ThemeButton {
    LANG = 'lang'
}
interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ThemeButton
}

export const Button: FC<ButtonPropsInterface> = ({
    children,
    className,
    ...otherProps
}) => {
    const classNameChecked = className ?? ''
    const classNameFinal = classNames(styles.button, {}, [
        styles[classNameChecked as ThemeButton]
    ])

    return (
        <button type='button' className={classNameFinal} {...otherProps}>
            {children}
        </button>
    )
}
