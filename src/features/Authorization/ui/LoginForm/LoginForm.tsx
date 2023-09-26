import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { useState, type FC, type ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { EyeClosedIcon, EyeIcon } from 'shared/assets'
import { Button, Input } from 'shared/ui'
import { loginActions } from 'features/Authorization/model/slice/loginSlice'

export const LoginForm: FC = () => {
    const [openEye, setOpenEye] = useState(false)
    const username = useAppSelector(getLoginUserName)
    const password = useAppSelector(getLoginPassword)
    const dispatch = useAppDispatch()

    const { t } = useTranslation(['modal'])
    const namePlaceholder = t('Имя пользователя')
    const passwordPlaceholder = t('Пароль')
    const signIn = t('Войти', { ns: 'translation' })

    const handleOpenEye = (): void => {
        setOpenEye((prev) => !prev)
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(loginActions.setUserName(e.target.value))
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(loginActions.setPassword(e.target.value))
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
            <Button className='bordered'>{signIn}</Button>
        </>
    )
}
