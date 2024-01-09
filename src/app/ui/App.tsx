import { useEffect, type FC } from 'react'
import '../styles/index.scss'
import { classNames } from 'shared/lib'
import { AppRouter } from '../providers/RouterProvider'
import { SideBar } from 'widgets/SideBar'
import { Header } from 'widgets/Header'
import { useTheme } from 'app/providers/ThemeProvider'
import { useAppDispatch, useAppSelector } from '../providers/StoreProvider'
import { getUserInitiated, userActions } from 'entities_/User'

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

    return (
        <div className={classNameFinal}>
            <Header />
            <main className='content'>
                <SideBar />
                <AppRouter />
            </main>
        </div>
    )
}

export default App
