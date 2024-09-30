import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { DropDown } from './DropDown'

describe('DropDown', () => {
    const items = [
        { id: '1', content: 'Item 1', href: '/item1' },
        { id: '2', content: 'Item 2', href: '/item2' },
        { id: '3', content: 'Item 3', onClick: jest.fn() }
    ]
    const triggerText = 'Click me'
    const direction = 'bottomLeft'

    test('renders correctly and contains the trigger button', () => {
        render(
            <DropDown
                trigger={triggerText}
                items={items}
                direction={direction}
            />
        )

        const menu = screen.getByTestId('dropdown-menu')
        const button = screen.getByRole('button', { name: 'Click me' })
        expect(menu).toBeInTheDocument()
        expect(menu).toContainElement(button)
    })
    test('renders the menu items', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <DropDown
                    trigger={triggerText}
                    items={items}
                    direction={direction}
                />
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Click me' })

        await user.click(button)

        const menuItems = screen.getAllByRole('menuitem')
        expect(menuItems).toHaveLength(items.length)
    })
    test('renders a link for items with an href', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <DropDown
                    trigger={triggerText}
                    items={items}
                    direction={direction}
                />
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Click me' })

        await user.click(button)

        const link = screen.getAllByRole('menuitem')[0]
        expect(link).toHaveAttribute('href', '/item1')
    })
    test('updates the active class when an item is hovered', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <DropDown
                    trigger={triggerText}
                    items={items}
                    direction={direction}
                />
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Click me' })

        await user.click(button)

        const menuItem = screen.getAllByRole('menuitem')[0]
        // user.hover(menuItem) doesnt work
        await user.click(menuItem)

        expect(menuItem).toHaveAttribute('data-headlessui-state', 'active')
    })
    test('calls the onClick handler when an item is clicked', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <DropDown
                    trigger={triggerText}
                    items={items}
                    direction={direction}
                />
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Click me' })

        await user.click(button)

        const menuItem = screen.getAllByRole('menuitem')[2]

        await user.click(menuItem)

        expect(items[2].onClick).toHaveBeenCalled()
    })
})
