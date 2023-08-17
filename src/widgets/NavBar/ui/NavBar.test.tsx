import { render, screen } from '@testing-library/react'
import { NavBar } from './NavBar'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('NavBar', () => {
    test('not collapsed', () => {
        render(<NavBar collapsed={false} />, {
            wrapper: MemoryRouter
        })
        const navbar = screen.getByTestId('navbar')
        const mainLink = screen.getByRole('link', { name: 'Главная' })
        const aboutLink = screen.getByRole('link', { name: 'О сайте' })
        expect(navbar).toBeInTheDocument()
        expect(navbar).toContainElement(mainLink)
        expect(navbar).toContainElement(aboutLink)
    })

    test('collapsed', () => {
        render(<NavBar collapsed={true} />, {
            wrapper: MemoryRouter
        })
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeInTheDocument()
        expect(navbar).not.toContainElement(screen.queryByText('Главная'))
        expect(navbar).not.toContainElement(screen.queryByText('О сайте'))
    })

    test('main link is active', () => {
        render(<NavBar collapsed={true} />, {
            wrapper: MemoryRouter
        })
        const navbar = screen.getByTestId('navbar')
        const mainList = screen.getByTestId('main')
        expect(navbar).toBeInTheDocument()
        expect(mainList).toHaveClass('active')
    })

    test('about link is active', async () => {
        render(<NavBar collapsed={true} />, {
            wrapper: MemoryRouter
        })
        const navbar = screen.getByTestId('navbar')
        const aboutList = screen.getByTestId('about')
        expect(navbar).toBeInTheDocument()
        expect(aboutList).not.toHaveClass('active')
        await userEvent.click(aboutList)
        expect(aboutList).toHaveClass('active')
    })
})
