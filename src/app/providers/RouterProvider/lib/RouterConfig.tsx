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
import { RoutesType } from 'shared/types'
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
                path: RoutesType.ABOUT,
                element: <AboutPage />
            },
            {
                path: `${RoutesType.PROFILE}/:id`,
                element: (
                    <RequiredAuth>
                        <ProfilePage />
                    </RequiredAuth>
                )
            },
            {
                path: RoutesType.ARTICLES,
                element: (
                    <RequiredAuth>
                        <ArticlesPage />
                    </RequiredAuth>
                )
            },
            {
                path: `${RoutesType.ARTICLES}/:id`,
                element: (
                    <RequiredAuth>
                        <ArticleDetailsPage />
                    </RequiredAuth>
                )
            },
            {
                path: RoutesType.ADMIN,
                element: (
                    <RequiredAuth roles={[UserRole.ADMIN, UserRole.MANAGER]}>
                        <AdminPage />
                    </RequiredAuth>
                )
            },
            {
                path: RoutesType.SETTINGS,
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
