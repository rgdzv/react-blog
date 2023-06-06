import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import ThemeProvider from './theme/ThemeProvider'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <AboutPageLazy />,
            },
            {
                path: 'main',
                element: <MainPageLazy />,
            },
        ],
    },
])

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
)
