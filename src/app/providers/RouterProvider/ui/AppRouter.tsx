import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    )
}
