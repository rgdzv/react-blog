import { Button, ThemeButton } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('render', () => {
        render(<Button>test</Button>)
        expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument()
    })

    test('having class clear', () => {
        render(<Button className={ThemeButton.USUAL}>test</Button>)
        expect(screen.getByRole('button', { name: 'test' })).toHaveClass(
            'usual'
        )
    })
})
