import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Modal } from './Modal'

describe('Modal', () => {
    const ref = createRef<HTMLDialogElement>()

    const closeModal = jest.fn()
    const onClickOutside = jest.fn()

    test('renders correctly and responds to outside click', async () => {
        const user = userEvent.setup()
        render(
            <Modal
                dialogRef={ref}
                isClosing
                closeModal={closeModal}
                onClickOutside={onClickOutside}
            >
                <div>Modal Content</div>
            </Modal>
        )
        const modal = screen.getByTestId('modal')
        expect(modal).toBeInTheDocument()
        expect(modal).toHaveClass('closing')
        expect(modal).toHaveTextContent('Modal Content')
        await user.click(modal)
        expect(onClickOutside).toHaveBeenCalled()
    })
    test('calls closeModal when the dialog is closed', async () => {
        render(
            <Modal
                dialogRef={ref}
                isClosing
                closeModal={closeModal}
                onClickOutside={onClickOutside}
            >
                <div>Modal Content</div>
            </Modal>
        )
        const modal = screen.getByTestId('modal')
        expect(modal).toBeInTheDocument()
        modal.dispatchEvent(new Event('close'))
        expect(closeModal).toHaveBeenCalled()
    })
})
