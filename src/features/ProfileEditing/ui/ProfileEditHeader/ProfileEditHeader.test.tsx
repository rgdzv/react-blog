import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ProfileEditHeader } from './ProfileEditHeader'

const propsMock = {
    canEdit: false,
    src: 'test',
    isLoading: false,
    validationErrors: {}
}

describe('ProfileEditHeader', () => {
    test('should render component correctly and show profile avatar', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileEditHeader {...propsMock} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByTestId('profile-header')).toBeInTheDocument()
        expect(screen.getByAltText('profile avatar')).toHaveAttribute(
            'src',
            'test'
        )
    })

    test('should show skeleton when isLoading is true', () => {
        const modifiedProps = {
            ...propsMock,
            isLoading: true
        }

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileEditHeader {...modifiedProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByTestId('profile-header-skeleton')
        ).toBeInTheDocument()
    })

    test('should show cancel and edit buttons if canEdit is true', () => {
        const modifiedProps = {
            ...propsMock,
            canEdit: true
        }

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileEditHeader {...modifiedProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByRole('button', { name: 'Отменить' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Сохранить' })
        ).toBeInTheDocument()
    })
})
