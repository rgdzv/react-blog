import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.log(error, info.componentStack)
    }

    render(): ReactNode {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError/>
                </Suspense>
            )
        }

        return children
    }
}
