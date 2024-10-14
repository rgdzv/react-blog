import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProviderTest } from 'shared/lib'
import { ThemeSwitcher } from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
    test('should render component correctly', async () => {
        render(
            <StoreProvider>
                <ThemeProviderTest>
                    <ThemeSwitcher />
                </ThemeProviderTest>
            </StoreProvider>
        )

        const div = screen.getByTestId('app')
        const button = screen.getByRole('button', { name: 'to-dark-theme' })
        expect(div).toBeInTheDocument()
        expect(div).toHaveClass('light')
        expect(div).toContainElement(button)
    })

    test('should call handleToggleMock whan button is clicked', async () => {
        const user = userEvent.setup()
        const handleToggleMock = jest.fn()

        render(
            <StoreProvider>
                <ThemeProviderTest>
                    <ThemeSwitcher />
                </ThemeProviderTest>
            </StoreProvider>
        )

        const button = screen.getByRole('button', { name: 'to-dark-theme' })

        button.onclick = handleToggleMock

        await user.click(button)

        expect(handleToggleMock).toHaveBeenCalledTimes(1)
    })
})
