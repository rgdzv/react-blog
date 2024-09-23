import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
    test('render', () => {
        render(<Input value='test' id='input-test' label='labelText' />)
        const input = screen.getByRole('textbox', { name: 'labelText:' })
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('test')
    })
    test('input disabled', () => {
        render(
            <Input value='test' id='input-test' label='labelText' disabled />
        )
        const input = screen.getByRole('textbox', { name: 'labelText:' })
        expect(input).toBeInTheDocument()
        expect(input).toBeDisabled()
    })
    test('input empty value', () => {
        render(<Input value='' id='input-test' label='labelText' />)
        const input = screen.getByRole('textbox', { name: 'labelText:' })
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
    })
    test('input password type', () => {
        render(<Input value='test' type='password' dataTestId='input' />)
        const input = screen.getByTestId('input')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('type', 'password')
    })
})
