import { type FC, useEffect } from 'react'
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

    const showAppRouterCondition = init ? <AppRouter /> : <PageLoader />

    return (
        <div className={classNameFinal}>
            <MainLayout
                header={<Header />}
                content={showAppRouterCondition}
                sidebar={<SideBar />}
            />
        </div>
    )
}

export default App
