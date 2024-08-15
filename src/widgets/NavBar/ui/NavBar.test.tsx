import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { NavBar } from './NavBar'

describe('NavBar', () => {
    test('not collapsed', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <NavBar collapsed={false} />
                </StoreProvider>
            </MemoryRouter>
        )
        const navbar = screen.getByTestId('navbar')
        const mainLink = screen.getByRole('link', { name: 'Главная' })
        const aboutLink = screen.getByRole('link', { name: 'О сайте' })
        expect(navbar).toBeInTheDocument()
        expect(navbar).toContainElement(mainLink)
        expect(navbar).toContainElement(aboutLink)
    })

    test('collapsed', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <NavBar collapsed={true} />
                </StoreProvider>
            </MemoryRouter>
        )
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeInTheDocument()
        expect(navbar).not.toContainElement(screen.queryByText('Главная'))
        expect(navbar).not.toContainElement(screen.queryByText('О сайте'))
    })

    test('main link is active', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <NavBar collapsed={true} />
                </StoreProvider>
            </MemoryRouter>
        )
        const navbar = screen.getByTestId('navbar')
        const mainList = screen.getByTestId('main')
        expect(navbar).toBeInTheDocument()
        expect(mainList).toHaveClass('active')
    })

    test('about link is active', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter>
                <StoreProvider>
                    <NavBar collapsed={true} />
                </StoreProvider>
            </MemoryRouter>
        )
        const navbar = screen.getByTestId('navbar')
        const aboutList = screen.getByTestId('about')
        expect(navbar).toBeInTheDocument()
        expect(aboutList).not.toHaveClass('active')
        await user.click(aboutList)
        expect(aboutList).toHaveClass('active')
    })
})
