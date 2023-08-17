import App from 'app/ui/App'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { MainPage } from 'pages/MainPage'
import { type ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const routes = [
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
]

const router = createBrowserRouter(routes)

export const RouterConfigProvider = (): ReactElement => (
    <RouterProvider router={router} />
)
