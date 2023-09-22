import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared/ui'

export const LoginForm: FC = () => {
    const { t } = useTranslation(['modal'])
    const namePlaceholder = t('Имя пользователя')
    const passwordPlaceholder = t('Пароль')
    const signIn = t('Войти', { ns: 'translation' })

    return (
        <>
            <Input
                value=''
                onChange={() => {}}
                placeholder={namePlaceholder}
                type='text'
            />
            <Input
                value=''
                onChange={() => {}}
                placeholder={passwordPlaceholder}
                type='password'
            />
            <Button className='bordered'>{signIn}</Button>
        </>
    )
}
