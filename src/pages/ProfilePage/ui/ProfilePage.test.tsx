import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfilePage />
                </StoreProvider>
            </MemoryRouter>
        )

        const profilePage = screen.getByTestId('profile-page')
        expect(profilePage).toBeInTheDocument()
    })
})
