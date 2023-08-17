import { render, screen } from '@testing-library/react'
import { PageError } from './PageError'

describe('PageError', () => {
    test('render', () => {
        render(<PageError />)
        const pageError = screen.getByTestId('pageError')
        const h1 = screen.getByRole('heading', {
            name: 'Извините. Произошла непредвиденная ошибка!'
        })
        const button = screen.getByRole('button', { name: 'Обновить страницу' })
        expect(pageError).toBeInTheDocument()
        expect(pageError).toContainElement(h1)
        expect(pageError).toContainElement(button)
    })
})
