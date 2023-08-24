import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeProviderTest } from 'shared/lib'

describe('ThemeSwitcher', () => {
    test('render', () => {
        render(
            <ThemeProviderTest>
                <ThemeSwitcher />
            </ThemeProviderTest>
        )
        const app = screen.getByTestId('app')
        const buttonLight = screen.getByRole('button', {
            name: 'to-dark-theme'
        })
        const svgIconLight = screen.getByTestId('light-theme')
        expect(app).toBeInTheDocument()
        expect(app).toHaveClass('app light')
        expect(buttonLight).toBeInTheDocument()
        expect(buttonLight).toContainElement(svgIconLight)
    })

    test('switch theme to dark', async () => {
        const user = userEvent.setup()
        render(
            <ThemeProviderTest>
                <ThemeSwitcher />
            </ThemeProviderTest>
        )
        const app = screen.getByTestId('app')
        const buttonLight = screen.getByRole('button', {
            name: 'to-dark-theme'
        })
        const svgIconLight = screen.getByTestId('light-theme')
        expect(app).toBeInTheDocument()
        expect(app).toHaveClass('app light')
        expect(buttonLight).toBeInTheDocument()
        expect(buttonLight).toContainElement(svgIconLight)
        await user.click(buttonLight)
        const buttonDark = screen.getByRole('button', {
            name: 'to-light-theme'
        })
        const svgIconDark = screen.getByTestId('dark-theme')
        expect(app).toHaveClass('app dark')
        expect(buttonDark).toBeInTheDocument()
        expect(buttonDark).toContainElement(svgIconDark)
    })
})
