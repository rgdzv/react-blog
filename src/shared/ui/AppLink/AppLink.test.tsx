import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppLink } from './AppLink'

describe('AppLink', () => {
    test('render', () => {
        render(<AppLink to='somewhere'>Text</AppLink>, {
            wrapper: MemoryRouter
        })
        const link = screen.getByRole('link', { name: /text/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/somewhere')
    })
})
