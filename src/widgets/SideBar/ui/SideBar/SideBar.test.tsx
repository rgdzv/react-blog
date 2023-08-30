import { SideBar } from './SideBar'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { ThemeProviderTest } from 'shared/lib'

describe('SideBar', () => {
    test('render', () => {
        render(<SideBar />, {
            wrapper: MemoryRouter
        })
        const sidebar = screen.getByTestId('sidebar')
        expect(sidebar).toBeInTheDocument()
    })

    test('collapsed', async () => {
        const user = userEvent.setup()
        render(<SideBar />, {
            wrapper: MemoryRouter
        })
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
        render(<SideBar />, {
            wrapper: MemoryRouter
        })
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
        render(<SideBar />, {
            wrapper: MemoryRouter
        })
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
                <ThemeProviderTest>
                    <SideBar />
                </ThemeProviderTest>
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
            name: 'to-light-theme'
        })
        expect(app).toHaveClass('app dark')
        expect(buttonDark).toBeInTheDocument()
    })
})
