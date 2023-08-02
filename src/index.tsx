import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterConfigProvider } from 'app/providers/RouterProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundaryProvider'
import 'shared/lib/i18n/i18n'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(
    <StrictMode>
        <ErrorBoundary>
            <ThemeProvider>
                <RouterConfigProvider />
            </ThemeProvider>
        </ErrorBoundary>
    </StrictMode>
)
