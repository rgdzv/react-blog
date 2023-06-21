import { Button, ThemeButton } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('render', () => {
        render(<Button>test</Button>)
        screen.debug()
        expect(screen.getByRole('button', {name: 'test'})).toBeInTheDocument()
    })

    test('having class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        screen.debug()
        expect(screen.getByRole('button', {name: 'test'})).toHaveClass('clear')
    })
})
