import { type FC, type MouseEvent, type ReactNode, type RefObject } from 'react'
import { classNames } from '../../lib'
import styles from './Modal.module.scss'

interface ModalPropsInterface {
    children: ReactNode
    isClosing: boolean
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
}

export const Modal: FC<ModalPropsInterface> = ({
    children,
    dialogRef,
    isClosing,
    onClickOutside,
    closeModal
}) => {
    const classNameFinal = classNames(styles.dialog, {
        [styles.closing]: isClosing
    })
    return (
        <dialog
            ref={dialogRef}
            className={classNameFinal}
            onClick={onClickOutside}
            onClose={closeModal}
            data-testid='modal'
        >
            {children}
        </dialog>
    )
}