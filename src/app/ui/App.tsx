import { useEffect, type FC } from 'react'
import '../styles/index.scss'
import { classNames } from 'shared/lib'
import { AppRouter } from '../providers/RouterProvider'
import { SideBar } from 'widgets/SideBar'
import { Header } from 'widgets/Header'
import { useTheme } from 'app/providers/ThemeProvider'
import { useAppDispatch, useAppSelector } from '../providers/StoreProvider'
import { getUserInitiated, userActions } from 'entities_/User'
import { PageLoader } from 'widgets/PageLoader'
import { MainLayout } from 'shared/layouts'

const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const classNameFinal = classNames('app', {}, [theme])
    const init = useAppSelector(getUserInitiated)

    useEffect(() => {
        if (!init) {
            dispatch(userActions.initAuthData())
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
