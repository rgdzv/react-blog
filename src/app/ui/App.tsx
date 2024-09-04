import { type FC, useEffect, Suspense } from 'react'
import '../styles/index.scss'
import { SideBar } from 'widgets/SideBar'
import { Header } from 'widgets/Header'
import { PageLoader } from 'widgets/PageLoader'
import { getUserInitiated, initAuthData } from 'features/Authorization'
import { MainLayout } from 'shared/layouts'
import { classNames, useTheme } from 'shared/lib'
import { useAppDispatch, useAppSelector } from '../providers/StoreProvider'
import { AppRouter } from '../providers/RouterProvider'

const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const classNameFinal = classNames('app', {}, [theme])
    const init = useAppSelector(getUserInitiated)

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
        />
    ) : (
        <PageLoader />
    )

    return (
        <Suspense>
            <div className={classNameFinal}>{showContentCondition}</div>
        </Suspense>
    )
}

export default App
