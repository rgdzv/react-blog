import { type FC } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/RouterProvider'
import { SideBar } from 'widgets/SideBar'

const App: FC = () => {
    const { theme } = useTheme()

    const classNameFinal = classNames('app', {}, [theme])

    return (
        <div className={classNameFinal}>
            <header></header>
            <main className='content'>
                <SideBar />
                <AppRouter />
            </main>
        </div>
    )
}

export default App
