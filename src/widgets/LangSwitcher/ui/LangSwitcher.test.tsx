import { render, screen } from '@testing-library/react'
import { LangSwitcher } from './LangSwitcher'
import userEvent from '@testing-library/user-event'

describe('LangSwitcher', () => {
    test('render', () => {
        render(<LangSwitcher />)
        const buttonRU = screen.getByRole('button', { name: 'ru' })
        expect(buttonRU).toBeInTheDocument()
    })

    test('switch language to english', async () => {
        const user = userEvent.setup()
        render(<LangSwitcher />)
        const buttonRU = screen.getByRole('button', { name: 'ru' })
        expect(buttonRU).toBeInTheDocument()
        await user.click(buttonRU)
        const buttonEN = screen.getByRole('button', { name: 'en' })
        expect(buttonEN).toBeInTheDocument()
    })

    test('switch language to russian', async () => {
        const user = userEvent.setup()
        render(<LangSwitcher />)
        const buttonEN = screen.getByRole('button', { name: 'en' })
        expect(buttonEN).toBeInTheDocument()
        await user.click(buttonEN)
        const buttonRU = screen.getByRole('button', { name: 'ru' })
        expect(buttonRU).toBeInTheDocument()
    })
})
