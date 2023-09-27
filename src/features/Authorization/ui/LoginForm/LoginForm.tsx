import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { useState, type FC, type ChangeEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { EyeClosedIcon, EyeIcon } from 'shared/assets'
import { Button, Input } from 'shared/ui'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByUserName } from '../../services/loginByUserName/loginByUserName'
// import { getLoginError } from '../..//model/selectors/getLoginError/getLoginError'

export const LoginForm: FC = () => {
    const username = useAppSelector(getLoginUserName)
    const password = useAppSelector(getLoginPassword)
    const isLoading = useAppSelector(getLoginIsLoading)
    // const loginError = useAppSelector(getLoginError)
    const dispatch = useAppDispatch()
    const [openEye, setOpenEye] = useState(false)

    const { t } = useTranslation(['modal'])
    const namePlaceholder = t('Имя пользователя')
    const passwordPlaceholder = t('Пароль')
    const signIn = t('Войти', { ns: 'translation' })

    const handleOpenEye = (): void => {
        setOpenEye((prev) => !prev)
    }

    const onNameChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            // useCallBack is needed?
            dispatch(loginActions.setUserName(e.target.value))
        },
        [dispatch]
    )

    const onPasswordChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPassword(e.target.value))
        },
        [dispatch]
    )

    const onLoginClick = (): void => {
        void dispatch(loginByUserName())
    }

    const passwordInputType = openEye ? 'text' : 'password'
    const passwordInputIcon = openEye ? (
        <EyeIcon data-testid='eye-open-icon' />
    ) : (
        <EyeClosedIcon data-testid='eye-close-icon' />
    )

    return (
        <>
            <Input
                value={username}
                onChange={onNameChange}
                placeholder={namePlaceholder}
                type='text'
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                placeholder={passwordPlaceholder}
                type={passwordInputType}
                classNameIcon='icon-right'
                handleOpenEye={handleOpenEye}
            >
                {passwordInputIcon}
            </Input>
            <Button
                className='bordered'
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {signIn}
            </Button>
        </>
    )
}
