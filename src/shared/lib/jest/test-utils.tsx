import { type ReactElement } from 'react'
import {
    render,
    type RenderResult,
    type RenderOptions,
    type queries
} from '@testing-library/react'
import { ThemeProviderTest } from './__mocks__/ThemeProviderTest'
import { MemoryRouter } from 'react-router-dom'

type R = RenderResult<typeof queries, HTMLElement, HTMLElement>

const AllTheProviders = ({
    children
}: {
    children: React.ReactNode
}): JSX.Element => {
    return (
        <MemoryRouter>
            <ThemeProviderTest>{children}</ThemeProviderTest>
        </MemoryRouter>
    )
}

export const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
): R => render(ui, { wrapper: AllTheProviders, ...options })
