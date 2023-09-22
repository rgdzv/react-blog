import { type FC } from 'react'
import { Modal } from 'widgets/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalPropsInterface {
    open: boolean
    closeModal: () => void
}

export const LoginModal: FC<LoginModalPropsInterface> = ({
    open,
    closeModal
}) => {
    return (
        <Modal open={open} closeModal={closeModal}>
            <LoginForm />
        </Modal>
    )
}
