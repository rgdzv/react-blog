import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ListBoxElement } from './ListBoxElement'

const mockProps = {
    options: [],
    label: 'Test Label',
    id: 'test-id',
    defaultValue: '',
    value: '',
    onChange: jest.fn(),
    classNameForListBox: undefined,
    isLoading: false,
    disabled: false
}

describe('ListBoxElement', () => {
    test('renders without crashing', () => {
        render(<ListBoxElement {...mockProps} />)

        const listbox = screen.getByTestId('listbox')
        expect(listbox).toBeInTheDocument()
    })

    test('renders with options and launches onChange', async () => {
        const user = userEvent.setup()
        const props = {
            ...mockProps,
            options: [
                { value: 'RUB', content: 'RUB', disabled: true },
                { value: 'EUR', content: 'EUR' }
            ]
        }
        render(<ListBoxElement {...props} />)

        const button = screen.getByRole('button', { name: 'Test Label:' })

        await user.click(button)

        const options = screen.getAllByRole('option')
        expect(options).toHaveLength(props.options.length)

        await user.click(options[1])
        expect(props.onChange).toHaveBeenCalledTimes(1)
    })

    test('renders skeleton when isLoading is true', () => {
        const props = {
            ...mockProps,
            isLoading: true
        }

        const { rerender } = render(<ListBoxElement {...props} />)

        const listbox = screen.getByTestId('listbox')
        const skeleton = screen.getByTestId('profile-input-skeleton')
        expect(listbox).toBeInTheDocument()
        expect(listbox).toContainElement(skeleton)

        props.isLoading = false

        rerender(<ListBoxElement {...props} />)

        const button = screen.getByRole('button', { name: 'Test Label:' })
        expect(listbox).toBeInTheDocument()
        expect(listbox).toContainElement(button)
    })

    test('renders disabled component when disabled is true', () => {
        const props = {
            ...mockProps,
            disabled: true
        }

        const { rerender } = render(<ListBoxElement {...props} />)

        const listbox = screen.getByTestId('listbox')
        expect(listbox).toBeInTheDocument()
        expect(listbox).toHaveAttribute('data-headlessui-state', 'disabled')

        props.disabled = false

        rerender(<ListBoxElement {...props} />)

        expect(listbox).toBeInTheDocument()
        expect(listbox).toHaveAttribute('data-headlessui-state', '')
    })
})
