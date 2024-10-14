import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { AppLink } from './AppLink'

describe('AppLink', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <AppLink to='somewhere'>Text</AppLink>
            </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'Text' })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/somewhere')
    })
})
