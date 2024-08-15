import {
    type FC,
    type ForwardedRef,
    type ReactNode,
    forwardRef,
    memo
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'
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
