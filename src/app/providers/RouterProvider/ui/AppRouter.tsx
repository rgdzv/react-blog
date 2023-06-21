import { type FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <div className='content__outlet'>
                <Outlet />
            </div>
        </Suspense>
    )
}
