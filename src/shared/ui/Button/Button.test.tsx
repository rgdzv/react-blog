import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('render', () => {
        render(<Button>test</Button>)
        expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument()
    })
})
