import { getUserAuthData, getUserRole } from 'features/Authorization'
import { type FC, type ReactNode, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { type UserRole } from 'entities_/User'
import { useAppSelector } from '../../StoreProvider/lib/hooks/hooks'

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
