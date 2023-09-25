import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './Button.module.scss'

type ClassNameType = 'lang' | 'bordered'
interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ClassNameType
}

export const Button: FC<ButtonPropsInterface> = ({
    children,
    className,
    ...otherProps
}) => {
    const classNameChecked = className ?? ''
    const classNameFinal = classNames(styles.button, {}, [
        styles[classNameChecked as ClassNameType]
    ])

    return (
        <button type='button' className={classNameFinal} {...otherProps}>
            {children}
        </button>
    )
}
