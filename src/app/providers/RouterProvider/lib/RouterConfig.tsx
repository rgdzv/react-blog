import App from 'app/ui/App'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { MainPage } from 'pages/MainPage'
import { type ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'
import { RequiredAuth } from '../ui/RequiredAuth'
import { ArticlesPage } from 'pages/ArticlesPage'

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
            },
            {
                path: 'profile/:id',
                element: (
                    <RequiredAuth>
                        <ProfilePage />
                    </RequiredAuth>
                )
            },
            {
                path: 'articles',
                element: (
                    <RequiredAuth>
                        <ArticlesPage />
                    </RequiredAuth>
                )
            }
        ]
    }
]

const router = createBrowserRouter(routes)

export const RouterConfigProvider = (): ReactElement => (
    <RouterProvider router={router} />
)
