import App from 'app/App'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { type ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    }
])

export const RouterConfigProvider = (): ReactElement => (
    <RouterProvider router={router} />
)
