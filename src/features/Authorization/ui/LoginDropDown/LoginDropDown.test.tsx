import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { LoginDropDown } from './LoginDropDown'

describe('LoginDropDown', () => {
    test('should render component correctly', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <LoginDropDown id='1' handleLogOut={jest.fn()} />
                </StoreProvider>
            </MemoryRouter>
        )

        const loginDropDown = screen.getByTestId('dropdown-menu')
        const button = screen.getByRole('button')
        const avatarImage = screen.getByAltText('login dropdown avatar')
        expect(loginDropDown).toBeInTheDocument()
        expect(loginDropDown).toContainElement(button)
        expect(button).toContainElement(avatarImage)
    })

    test('should render menu items correctly', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <LoginDropDown id='1' handleLogOut={jest.fn()} />
                </StoreProvider>
            </MemoryRouter>
        )

        const button = screen.getByRole('button')

        await user.click(button)

        expect(screen.getByText('Настройки')).toBeInTheDocument()
        expect(screen.getByText('Профиль')).toBeInTheDocument()
        expect(screen.getByText('Выйти')).toBeInTheDocument()
    })

    test('calls handleLogOut when logout is clicked', async () => {
        const user = userEvent.setup()
        const handleLogOutMock = jest.fn()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <LoginDropDown id='1' handleLogOut={handleLogOutMock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const button = screen.getByRole('button')

        await user.click(button)

        const exit = screen.getByText('Выйти')

        expect(exit).toBeInTheDocument()

        await user.click(exit)

        expect(handleLogOutMock).toHaveBeenCalledTimes(1)
    })
})
