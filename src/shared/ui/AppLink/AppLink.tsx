import { forwardRef, memo } from 'react'
import type { FC, ForwardedRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
interface AppLinkPropsInterface extends LinkProps {
    children: ReactNode
    to: string
}

export const AppLink: FC<AppLinkPropsInterface> = memo(
    forwardRef(
        (
            { children, to, ...otherProps },
            ref: ForwardedRef<HTMLAnchorElement>
        ) => {
            return (
                <Link to={to} {...otherProps} ref={ref}>
                    {children}
                </Link>
            )
        }
    )
)
