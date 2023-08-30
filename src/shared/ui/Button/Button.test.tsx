import { ArrowIcon, ThemeIcon } from 'shared/assets'
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
                <ThemeIcon data-testid='theme-icon' />
            </Button>
        )
        const buttonName = screen.getByRole('button')
        const svgIcon = screen.getByTestId('theme-icon')
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
                <ArrowIcon data-testid='arrow-icon' />
            </Button>
        )
        const buttonName = screen.getByRole('button')
        const svgIcon = screen.getByTestId('arrow-icon')
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
        expect(buttonName).toContainElement(svgIcon)
    })
})
