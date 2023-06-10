import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterConfigProvider } from 'app/providers/RouterProvider'
import { i18nConfig } from 'shared/lib'

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterConfigProvider/>
        </ThemeProvider>
    </StrictMode>
)
