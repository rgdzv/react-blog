import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterConfigProvider } from 'app/providers/RouterProvider'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterConfigProvider />
        </ThemeProvider>
    </StrictMode>
)
