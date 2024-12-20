import { useCallback, useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { EyeClosedIcon, EyeIcon } from 'shared/assets'
import { Input } from 'shared/ui'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { loginActions } from '../../model/slice/loginSlice/loginSlice'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

export const LoginForm: FC = () => {
    const username = useAppSelector(getLoginUserName)
    const password = useAppSelector(getLoginPassword)
    const error = useAppSelector(getLoginError)
    const dispatch = useAppDispatch()
    const [openEye, setOpenEye] = useState(false)

    const { t } = useTranslation(['translation', 'modal'])
    const namePlaceholder = t('Имя пользователя')
    const passwordPlaceholder = t('Пароль')
    const svgTitleOpen = t('Показать пароль')
    const svgTitleClose = t('Спрятать пароль')

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
        <EyeIcon data-testid='eye-open-icon' title={svgTitleOpen} />
    ) : (
        <EyeClosedIcon data-testid='eye-close-icon' title={svgTitleClose} />
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
                classNameForIcon='password_eye'
            />
        </>
    )
}
