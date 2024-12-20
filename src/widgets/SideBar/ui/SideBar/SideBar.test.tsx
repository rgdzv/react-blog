import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProviderTest } from 'shared/lib'
import { SideBar } from './SideBar'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
})

describe('SideBar', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <SideBar />
                </StoreProvider>
            </MemoryRouter>
        )

        const sidebar = screen.getByTestId('sidebar')
        expect(sidebar).toBeInTheDocument()
    })

    test('collapsed', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <SideBar />
                </StoreProvider>
            </MemoryRouter>
        )

        const sidebar = screen.getByTestId('sidebar')
        const toggleArrow = screen.getByRole('button', {
            name: 'collapse-sidebar'
        })
        expect(sidebar).toBeInTheDocument()
        expect(toggleArrow).toBeInTheDocument()
        expect(sidebar).not.toHaveClass('collapsed')

        await user.click(toggleArrow)
        expect(sidebar).toHaveClass('collapsed')
    })

    test('about link is active', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <SideBar />
                </StoreProvider>
            </MemoryRouter>
        )

        const sidebar = screen.getByTestId('sidebar')
        const aboutList = screen.getByTestId('about')
        expect(sidebar).toBeInTheDocument()
        expect(aboutList).toBeInTheDocument()
        expect(aboutList).not.toHaveClass('active')

        await user.click(aboutList)
        expect(aboutList).toHaveClass('active')
    })

    test('change language', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <SideBar />
                </StoreProvider>
            </MemoryRouter>
        )

        const sidebar = screen.getByTestId('sidebar')
        const mainLinkRU = screen.getByRole('link', { name: 'Главная' })
        const buttonLang = screen.getByRole('button', { name: 'ru' })
        expect(sidebar).toBeInTheDocument()
        expect(mainLinkRU).toBeInTheDocument()
        expect(buttonLang).toBeInTheDocument()

        await user.click(buttonLang)
        const mainLinkRUAbsense = screen.queryByRole('link', {
            name: 'Главная'
        })
        const mainLinkEN = screen.getByRole('link', { name: 'Main' })
        expect(mainLinkRUAbsense).not.toBeInTheDocument()
        expect(mainLinkEN).toBeInTheDocument()
    })

    test('change theme', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ThemeProviderTest>
                        <SideBar />
                    </ThemeProviderTest>
                </StoreProvider>
            </MemoryRouter>
        )

        const app = screen.getByTestId('app')
        const buttonLight = screen.getByRole('button', {
            name: 'to-dark-theme'
        })
        expect(app).toBeInTheDocument()
        expect(app).toHaveClass('app light')
        expect(buttonLight).toBeInTheDocument()

        await user.click(buttonLight)
        const buttonDark = screen.getByRole('button', {
            name: 'to-dark-theme'
        })
        expect(app).toHaveClass('app light')
        expect(buttonDark).toBeInTheDocument()
    })
})
