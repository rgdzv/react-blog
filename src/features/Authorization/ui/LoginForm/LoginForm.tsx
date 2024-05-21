import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { useState, type FC, type ChangeEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { EyeClosedIcon, EyeIcon } from 'shared/assets'
import { Input } from 'shared/ui'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

export const LoginForm: FC = () => {
    const username = useAppSelector(getLoginUserName)
    const password = useAppSelector(getLoginPassword)
    const error = useAppSelector(getLoginError)
    const dispatch = useAppDispatch()
    const [openEye, setOpenEye] = useState(false)

    const { t } = useTranslation(['modal'])
    const namePlaceholder = t('Имя пользователя')
    const passwordPlaceholder = t('Пароль')

    const handleOpenEye = (): void => {
        setOpenEye((prev) => !prev)
    }

    const onNameChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
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
                isError={error}
                classNameForInputWrapper='login_username'
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                placeholder={passwordPlaceholder}
                type={passwordInputType}
                onClick={handleOpenEye}
                isError={error}
                icon={passwordInputIcon}
                classNameForInputWrapper='login_password'
            />
        </>
    )
}
