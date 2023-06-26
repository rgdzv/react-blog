import { type FC } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/RouterProvider'
import { SideBar } from 'widgets/SideBar'

const App: FC = () => {
    const { theme } = useTheme()
    
    const classNameFinal = classNames('app', { hovered: true }, [theme])

    return (
        <div className={classNameFinal}>
            <header>
            </header>
            <div className='content'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App
