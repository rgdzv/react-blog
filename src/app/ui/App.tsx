import { type FC } from 'react'
import '../styles/index.scss'
import { classNames } from 'shared/lib'
import { AppRouter } from '../providers/RouterProvider'
import { SideBar } from 'widgets/SideBar'
import { Header } from 'widgets/Header'
import { useTheme } from 'app/providers/ThemeProvider'

const App: FC = () => {
    const { theme } = useTheme()

    const classNameFinal = classNames('app', {}, [theme])

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
