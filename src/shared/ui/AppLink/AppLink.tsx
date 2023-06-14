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
    return (
        <Link
            to={to}
            className={classNames(styles.link, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
