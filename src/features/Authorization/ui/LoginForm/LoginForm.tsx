import { useState, type FC, type ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { EyeClosedIcon, EyeIcon } from 'shared/assets'
import { Button, Input } from 'shared/ui'

export const LoginForm: FC = () => {
    const [openEye, setOpenEye] = useState(false)
    const [nameValue, setNameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const { t } = useTranslation(['modal'])
    const namePlaceholder = t('Имя пользователя')
    const passwordPlaceholder = t('Пароль')
    const signIn = t('Войти', { ns: 'translation' })

    const handleOpenEye = (): void => {
        setOpenEye((prev) => !prev)
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNameValue(e.target.value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPasswordValue(e.target.value)
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
                value={nameValue}
                onChange={onNameChange}
                placeholder={namePlaceholder}
                type='text'
            />
            <Input
                value={passwordValue}
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
