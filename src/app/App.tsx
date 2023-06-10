import { FC, Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/RouterProvider'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <header>
                    <NavBar/>
                </header>
                <div className='content'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
