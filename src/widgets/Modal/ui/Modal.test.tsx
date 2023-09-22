import { render, screen } from '@testing-library/react'
import { Modal } from './Modal'
// import userEvent from '@testing-library/user-event'

describe('Modal', () => {
    test('render', () => {
        render(
            <Modal open={false} closeModal={() => {}}>
                TEST
            </Modal>
        )
        const modal = screen.getByTestId('modal')
        expect(modal).toBeInTheDocument()
        expect(modal).not.toHaveAttribute('open')
    })

    test('modal opened', () => {
        render(
            <Modal open={true} closeModal={() => {}}>
                TEST
            </Modal>
        )
        screen.debug()
        const modal = screen.getByTestId('modal')
        expect(modal).toBeInTheDocument()
        // expect(modal).toHaveAttribute('open')
    })
})
