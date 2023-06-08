import { FC } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/RouterProvider'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <header>
                <NavBar/>
            </header>
            <ThemeSwitcher/>
            <section>
                <AppRouter/>
            </section>
        </div>
    )
}

export default App
