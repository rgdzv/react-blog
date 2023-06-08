import App from "app/App"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

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

export const RouterConfigProvider = () => <RouterProvider router={router} />
