import { type FC } from 'react'
import { Button } from 'shared/ui'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import { useModal } from 'widgets/Modal'
import { LoginModal } from 'features/Authorization'

export const Header: FC = () => {
    const { isModalOpen, openModal, closeModal } = useModal()
    const { t } = useTranslation()

    const signIn = t('Войти')

    return (
        <header className={styles.header}>
            <Button onClick={openModal} className='bordered'>
                {signIn}
            </Button>
            <LoginModal open={isModalOpen} closeModal={closeModal} />
        </header>
    )
}
