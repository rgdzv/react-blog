import type { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from 'app/ui/App'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { AdminPage } from 'pages/AdminPage'
import { SettingsPage } from 'pages/SettingsPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { UserRole } from 'entities_/User'
import { RequiredAuth } from '../ui/RequiredAuth'

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
            },
            {
                path: 'articles/:id',
                element: (
                    <RequiredAuth>
                        <ArticleDetailsPage />
                    </RequiredAuth>
                )
            },
            {
                path: 'admin',
                element: (
                    <RequiredAuth roles={[UserRole.ADMIN, UserRole.MANAGER]}>
                        <AdminPage />
                    </RequiredAuth>
                )
            },
            {
                path: 'settings',
                element: (
                    <RequiredAuth>
                        <SettingsPage />
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
