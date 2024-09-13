import { useEffect, Suspense } from 'react'
import type { FC } from 'react'
import '../styles/index.scss'
import { SideBar } from 'widgets/SideBar'
import { Header } from 'widgets/Header'
import { PageLoader } from 'widgets/PageLoader'
import { getUserInitiated, initAuthData } from 'features/Authorization'
import { MainLayout } from 'shared/layouts'
import {
    classNames,
    useAppDispatch,
    useAppSelector,
    useTheme
} from 'shared/lib'
import { AppRouter } from '../providers/RouterProvider/ui/AppRouter'
import { useAppToolBar } from '../lib/hooks/useAppToolBar'

export const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const classNameFinal = classNames('app', {}, [theme])
    const init = useAppSelector(getUserInitiated)
    const toolbar = useAppToolBar()

    useEffect(() => {
        if (!init) {
            void dispatch(initAuthData())
        }
    }, [dispatch, init])

    const showContentCondition = init ? (
        <MainLayout
            header={<Header />}
            content={<AppRouter />}
            sidebar={<SideBar />}
            toolbar={toolbar}
        />
    ) : (
        <PageLoader className='main' />
    )

    return (
        <Suspense>
            <div className={classNameFinal}>{showContentCondition}</div>
        </Suspense>
    )
}
