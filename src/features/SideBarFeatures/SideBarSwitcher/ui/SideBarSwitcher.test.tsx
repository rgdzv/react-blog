import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SideBarSwitcher } from './SideBarSwitcher'

describe('SideBarSwitcher', () => {
    test('should render component correctly', () => {
        render(<SideBarSwitcher collapsed={false} handleToggle={jest.fn()} />)

        const button = screen.getByRole('button', { name: 'collapse-sidebar' })
        expect(button).toBeInTheDocument()
    })

    test('should call handleToggleMock whan button is clicked', async () => {
        const user = userEvent.setup()
        const handleToggleMock = jest.fn()

        render(
            <SideBarSwitcher
                collapsed={false}
                handleToggle={handleToggleMock}
            />
        )

        const button = screen.getByRole('button', { name: 'collapse-sidebar' })

        await user.click(button)

        expect(handleToggleMock).toHaveBeenCalledTimes(1)
    })

    test('should render collapsed sidebar', async () => {
        render(<SideBarSwitcher collapsed={true} handleToggle={jest.fn()} />)

        const button = screen.getByRole('button', { name: 'expand-sidebar' })
        expect(button).toBeInTheDocument()
    })
})
