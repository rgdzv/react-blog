import { memo, type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
interface AppLinkPropsInterface extends LinkProps {
    children: ReactNode
    to: string
}

export const AppLink: FC<AppLinkPropsInterface> = memo(
    ({ children, to, ...otherProps }) => {
        return (
            <Link to={to} {...otherProps}>
                {children}
            </Link>
        )
    }
)
