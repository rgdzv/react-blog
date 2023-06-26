import { type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import styles from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkPropsInterface extends LinkProps {
    className?: string
    children: ReactNode
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkPropsInterface> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {

    const classNameChecked = className ?? ''
    const classNameFinal = classNames(styles.link, {}, [classNameChecked, styles[theme]])

    return (
        <Link
            to={to}
            className={classNameFinal}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
