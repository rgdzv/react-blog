import App from 'app/App'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { MainPage } from 'pages/MainPage'
import { type ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />,
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
