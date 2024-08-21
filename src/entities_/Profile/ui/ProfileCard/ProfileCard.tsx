import type { ChangeEvent, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, ListBoxElement } from 'shared/ui'
import { currencies } from '../../lib/currencies'
import { countries } from '../../lib/countries'
import styles from './ProfileCard.module.scss'
import type { Profile } from '../../model/types/profile'
import type { CurrencyType } from '../../model/types/currency'
import type { CountryType } from '../../model/types/country'

interface ProfileCardPropsInterface {
    profileForm: Profile
    isLoading: boolean
    readOnly: boolean
    onChangeInputs?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCurrency?: (currency: CurrencyType) => void
    onChangeCountry?: (country: CountryType) => void
    validationErrors?: Record<string, string>
}

export const ProfileCard: FC<ProfileCardPropsInterface> = ({
    profileForm,
    isLoading,
    readOnly,
    onChangeInputs,
    onChangeCurrency,
    onChangeCountry,
    validationErrors
}) => {
    const { t } = useTranslation('profile')

    return (
        <>
            <div className={styles.leftBlock}>
                <Input
                    value={String(profileForm?.firstname)}
                    onChange={onChangeInputs}
                    id='firstname'
                    label={t('Имя')}
                    placeholder={t('Имя')}
                    classNameForInputWrapper='firstname'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.firstname as string)}
                />
                <Input
                    value={String(profileForm?.lastname)}
                    onChange={onChangeInputs}
                    id='lastname'
                    label={t('Фамилия')}
                    placeholder={t('Фамилия')}
                    classNameForInputWrapper='lastname'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.lastname as string)}
                />
                <Input
                    value={String(profileForm?.age)}
                    onChange={onChangeInputs}
                    id='age'
                    label={t('Возраст')}
                    placeholder={t('Возраст')}
                    classNameForInputWrapper='age'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.age as string)}
                />
                <Input
                    value={String(profileForm?.city)}
                    onChange={onChangeInputs}
                    id='city'
                    label={t('Город')}
                    placeholder={t('Город')}
                    classNameForInputWrapper='city'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.city as string)}
                />
            </div>
            <div className={styles.rightBlock}>
                <Input
                    value={String(profileForm?.username)}
                    onChange={onChangeInputs}
                    id='username'
                    label={t('Имя пользователя')}
                    placeholder={t('Имя пользователя')}
                    classNameForInputWrapper='username'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.username as string)}
                />
                <Input
                    value={String(profileForm?.avatar)}
                    onChange={onChangeInputs}
                    id='avatar'
                    label={t('Ссылка на аватар')}
                    placeholder={t('Ссылка на аватар')}
                    classNameForInputWrapper='avatar'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.avatar as string)}
                />
                <ListBoxElement
                    options={currencies}
                    value={String(profileForm?.currency)}
                    onChange={onChangeCurrency}
                    id='currency'
                    label='Валюта'
                    defaultValue='Укажите валюту'
                    classNameForListBox='currency'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
                <ListBoxElement
                    options={countries}
                    value={String(profileForm?.country)}
                    onChange={onChangeCountry}
                    id='country'
                    label='Страна'
                    defaultValue='Укажите страну'
                    classNameForListBox='country'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
            </div>
        </>
    )
}
