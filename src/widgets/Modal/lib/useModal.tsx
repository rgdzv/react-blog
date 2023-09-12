import { useState } from 'react'

interface UseModalResult {
    isModalOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export const useModal = (): UseModalResult => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (): void => {
        setIsModalOpen(true)
    }

    const closeModal = (): void => {
        setIsModalOpen(false)
    }

    return {
        isModalOpen,
        openModal,
        closeModal
    }
}
