import { memo } from 'react'
import type { FC, MouseEvent, RefObject } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Modal } from 'shared/ui'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { LoginForm } from '../LoginForm/LoginForm'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginActions } from '../../model/slice/loginSlice/loginSlice'
import styles from './LoginModal.module.scss'

interface LoginModalPropsInterface {
    isClosing: boolean
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
}

export const LoginModal: FC<LoginModalPropsInterface> = memo(
    ({
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
        const signIn = t('Войти')

        const onLoginClick = (): void => {
            void dispatch(loginByUserName())
        }

        const handleCleanAll = (): void => {
            closeModal()
            dispatch(loginActions.cleanAll())
        }

        const error =
            loginError !== '' ? (
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
                        <Button
                            onClick={onClickCloseButton}
                            className='bordered'
                        >
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
)
