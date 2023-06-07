import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from 'app/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <AboutPage/>,
            },
            {
                path: 'main',
                element: <MainPage />,
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
