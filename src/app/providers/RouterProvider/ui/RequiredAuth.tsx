import { getUserAuthData } from 'entities/User'
import { useAppSelector } from '../../StoreProvider/hooks/hooks'
import { type ReactNode, type FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface RequiredAuthPropsInterface {
    children: ReactNode
}

export const RequiredAuth: FC<RequiredAuthPropsInterface> = ({ children }) => {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()

    if (auth === undefined) {
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return children
}
