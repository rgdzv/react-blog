import { render, screen } from '@testing-library/react'
import { ThemeIcon } from 'shared/assets'
import { Button } from './Button'

describe('Button', () => {
    test('render', () => {
        render(<Button>test</Button>)

        const buttonName = screen.getByRole('button', { name: 'test' })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
    })

    test('disabled button', () => {
        render(<Button disabled={true}>test</Button>)

        const buttonName = screen.getByRole('button', { name: 'test' })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
        expect(buttonName).toHaveAttribute('disabled')
        expect(buttonName).toBeDisabled()
    })

    test('button with special class', () => {
        render(<Button className='bordered'>Обновить страницу</Button>)

        const buttonName = screen.getByRole('button', {
            name: 'Обновить страницу'
        })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button bordered')
    })

    test('selected button', () => {
        render(<Button selected={true}>Selected</Button>)

        const buttonName = screen.getByRole('button', {
            name: 'Selected'
        })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('selected')
    })

    test('button with svg', () => {
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
})
