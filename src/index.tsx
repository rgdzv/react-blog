import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterConfigProvider } from 'app/providers/RouterProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundaryProvider'
import { i18nForProd } from 'shared/config'
import { StoreProvider } from 'app/providers/StoreProvider'

i18nForProd()

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(
    <StrictMode>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <RouterConfigProvider />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </StrictMode>
)
