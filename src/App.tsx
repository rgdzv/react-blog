import { FC, Suspense, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './styles/index.scss'
import useTheme from './theme/useTheme'

const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <nav>
                <ul>
                    <li>
                        <Link to={`about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`main`}>Main</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default App
