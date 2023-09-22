import {
    useRef,
    type FC,
    useEffect,
    type MouseEvent,
    type ReactNode,
    useState
} from 'react'
import styles from './Modal.module.scss'
import { classNames } from 'shared/lib'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface ModalPropsInterface {
    children: ReactNode
    open: boolean
    closeModal: () => void
}

export const Modal: FC<ModalPropsInterface> = ({
    open,
    closeModal,
    children
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
    const { t } = useTranslation()
    const { current } = dialogRef

    const timeoutSection = (): void => {
        setIsClosing(true)
        timeoutRef.current = setTimeout(() => {
            current?.close()
            setIsClosing(false)
        }, 150)
    }

    const onClickOutside = (e: MouseEvent<HTMLDialogElement>): void => {
        if (e.target === current) {
            timeoutSection()
        }
    }

    const onClickCloseButton = (): void => {
        timeoutSection()
    }

    const classNameFinal = classNames(styles.dialog, {
        [styles.closing]: isClosing
    })

    const closeButtonName = t('Закрыть')

    useEffect(() => {
        if (current === undefined) return

        if (open) {
            current?.showModal()
        }

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [open, current])

    return (
        <dialog
            ref={dialogRef}
            className={classNameFinal}
            onClick={onClickOutside}
            onClose={closeModal}
            data-testid='modal'
        >
            <article className={styles.dialogContent}>
                <div className={styles.dialogSection}>{children}</div>
                <footer className={styles.dialogFooter}>
                    <Button onClick={onClickCloseButton} className='bordered'>
                        {closeButtonName}
                    </Button>
                </footer>
            </article>
        </dialog>
    )
}
