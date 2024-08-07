import { getUserAuthData, getUserRole } from 'features/Authorization'
import { useAppSelector } from '../../StoreProvider/lib/hooks/hooks'
import { type ReactNode, type FC, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { type UserRole } from 'entities_/User'

interface RequiredAuthPropsInterface {
    children: ReactNode
    roles?: UserRole[]
}

export const RequiredAuth: FC<RequiredAuthPropsInterface> = ({
    children,
    roles
}) => {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()
    const userRoles = useAppSelector(getUserRole)

    const hasRequiredRoles = useMemo(() => {
        if (roles === undefined) {
            return true
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole)
            return hasRole
        })
    }, [roles, userRoles])

    if (auth === undefined || !hasRequiredRoles) {
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return children
}
