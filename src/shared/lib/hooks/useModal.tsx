import {
    type MouseEvent,
    type RefObject,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react'

interface UseModalResult {
    isClosing: boolean
    openModal: () => void
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
}

export const useModal = (): UseModalResult => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
    const { current } = dialogRef

    const openModal = (): void => {
        setIsModalOpen(true)
    }

    const closeModal = (): void => {
        setIsModalOpen(false)
    }

    const timeoutSection = useCallback(() => {
        setIsClosing(true)
        timeoutRef.current = setTimeout(() => {
            current?.close()
            setIsClosing(false)
        }, 150)
    }, [current])

    const onClickOutside = useCallback(
        (e: MouseEvent<HTMLDialogElement>): void => {
            if (e.target === current) {
                timeoutSection()
            }
        },
        [current, timeoutSection]
    )

    const onClickCloseButton = useCallback(() => {
        timeoutSection()
    }, [timeoutSection])

    useEffect(() => {
        if (dialogRef.current === undefined) return

        if (isModalOpen) {
            dialogRef.current?.showModal()
        }

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [isModalOpen, timeoutRef, dialogRef])

    return {
        isClosing,
        openModal,
        closeModal,
        dialogRef,
        onClickOutside,
        onClickCloseButton
    }
}
