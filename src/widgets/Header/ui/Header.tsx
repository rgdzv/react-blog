import { Suspense, memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
    LoginDropDown,
    LoginModal,
    getUserAuthData,
    loginActions,
    userActions
} from 'features/Authorization'
import { Button } from 'shared/ui'
import { useAppDispatch, useAppSelector, useModal } from 'shared/lib'
import styles from './Header.module.scss'

export const Header: FC = memo(() => {
    const userAuthData = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()
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

    const handleLogOut = (): void => {
        dispatch(userActions.logOutUser())
        closeModal()
        dispatch(loginActions.cleanAll())
    }

    if (userAuthData !== undefined) {
        dialogRef.current?.close()

        return (
            <header className={styles.header} data-testid='header'>
                <Suspense>
                    <LoginDropDown
                        handleLogOut={handleLogOut}
                        id={userAuthData.id}
                    />
                </Suspense>
            </header>
        )
    }

    return (
        <header className={styles.header} data-testid='header'>
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
})
