import { type FC } from 'react'
import { Button } from 'shared/ui'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal, useModal } from 'widgets/Modal'

export const Header: FC = () => {
    const { isModalOpen, openModal, closeModal } = useModal()
    const { t } = useTranslation()

    const signIn = t('Войти')

    return (
        <header className={styles.header}>
            <Button onClick={openModal}>{signIn}</Button>
            <Modal open={isModalOpen} closeModal={closeModal}></Modal>
        </header>
    )
}
