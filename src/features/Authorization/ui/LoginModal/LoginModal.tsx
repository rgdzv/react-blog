import { type RefObject, type FC, type MouseEvent } from 'react'
import { Modal } from 'widgets/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { loginByUserName } from '../../services/loginByUserName/loginByUserName'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import styles from './LoginModal.module.scss'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginActions } from '../../model/slice/loginSlice'

interface LoginModalPropsInterface {
    isClosing: boolean
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
}

export const LoginModal: FC<LoginModalPropsInterface> = ({
    dialogRef,
    isClosing,
    closeModal,
    onClickOutside,
    onClickCloseButton
}) => {
    const isLoading = useAppSelector(getLoginIsLoading)
    const loginError = useAppSelector(getLoginError)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const close = t('Закрыть')
    const signIn = t('Войти', { ns: 'translation' })

    const onLoginClick = (): void => {
        void dispatch(loginByUserName())
    }

    const handleCleanAll = (): void => {
        closeModal()
        dispatch(loginActions.cleanAll())
    }

    const error =
        loginError !== undefined ? (
            <span className={styles.loginError}>{loginError}</span>
        ) : null

    return (
        <Modal
            dialogRef={dialogRef}
            isClosing={isClosing}
            closeModal={handleCleanAll}
            onClickOutside={onClickOutside}
        >
            <article className={styles.dialogContent}>
                <LoginForm />
                <footer className={styles.dialogFooter}>
                    <Button onClick={onClickCloseButton} className='bordered'>
                        {close}
                    </Button>
                    <Button
                        className='bordered'
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {signIn}
                    </Button>
                </footer>
                {error}
            </article>
        </Modal>
    )
}
