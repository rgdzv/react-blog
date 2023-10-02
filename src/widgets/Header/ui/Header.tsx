import { type FC } from 'react'
import { Button } from 'shared/ui'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/Authorization'
import { useModal } from 'shared/lib'

export const Header: FC = () => {
    const {
        openModal,
        dialogRef,
        isClosing,
        closeModal,
        onClickOutside,
        onClickCloseButton
    } = useModal()
    const { t } = useTranslation()

    const signIn = t('Войти')

    return (
        <header className={styles.header}>
            <Button onClick={openModal} className='bordered'>
                {signIn}
            </Button>
            <LoginModal
                dialogRef={dialogRef}
                isClosing={isClosing}
                closeModal={closeModal}
                onClickOutside={onClickOutside}
                onClickCloseButton={onClickCloseButton}
            />
        </header>
    )
}
