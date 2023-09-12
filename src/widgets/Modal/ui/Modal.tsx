import {
    useRef,
    type FC,
    useEffect,
    type MouseEvent,
    type ReactNode
} from 'react'
import styles from './Modal.module.scss'

interface ModalPropsInterface {
    children: ReactNode
    open: boolean
    onClose: () => void
}

export const Modal: FC<ModalPropsInterface> = ({ open, onClose, children }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const { current } = dialogRef

    const onClick = (e: MouseEvent<HTMLDialogElement>): void => {
        const dialogDimensions = current?.getBoundingClientRect()

        if (dialogDimensions !== undefined) {
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                current?.close()
            }
        }
    }

    useEffect(() => {
        if (current === undefined) return

        if (open) {
            current?.showModal()
        } else {
            current?.close()
        }
    }, [open, current])

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            onClick={onClick}
            onClose={onClose}
        >
            {children}
        </dialog>
    )
}
