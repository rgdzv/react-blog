import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import SettingsPage from './SettingsPage'

describe('SettingsPage', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <SettingsPage />
                </StoreProvider>
            </MemoryRouter>
        )

        const settingsPage = screen.getByTestId('settings-page')
        expect(settingsPage).toBeInTheDocument()
    })
})
