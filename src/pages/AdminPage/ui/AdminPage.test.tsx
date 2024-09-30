import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import AdminPage from './AdminPage'

describe('AdminPage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <AdminPage />
                </StoreProvider>
            </MemoryRouter>
        )

        const adminPage = screen.getByTestId('admin-page')
        expect(adminPage).toBeInTheDocument()
    })
})
