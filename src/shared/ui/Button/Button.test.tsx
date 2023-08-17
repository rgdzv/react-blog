import { ArrowLight, ThemeLight } from 'shared/assets'
import { Button, ButtonTheme } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('render', () => {
        render(<Button>test</Button>)
        const buttonName = screen.getByRole('button', { name: 'test' })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
    })

    test('language button', () => {
        render(<Button className={ButtonTheme.LANG}>RU</Button>)
        const buttonName = screen.getByRole('button', { name: 'RU' })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button lang')
    })

    test('theme button', () => {
        render(
            <Button>
                <ThemeLight data-testid='light-theme' />
            </Button>
        )
        const buttonName = screen.getByRole('button')
        const svgIcon = screen.getByTestId('light-theme')
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
        expect(buttonName).toContainElement(svgIcon)
    })

    test('reload button', () => {
        render(
            <Button className={ButtonTheme.RELOAD}>Обновить страницу</Button>
        )
        const buttonName = screen.getByRole('button', {
            name: 'Обновить страницу'
        })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button reload')
    })

    test('sidebar toggle button', () => {
        render(
            <Button>
                <ArrowLight data-testid='arrow-light' />
            </Button>
        )
        const buttonName = screen.getByRole('button')
        const svgIcon = screen.getByTestId('arrow-light')
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
        expect(buttonName).toContainElement(svgIcon)
    })
})
