import { type ChangeEvent, type FC } from 'react'
import { Input, ListBoxElement } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'
import { type CurrencyType } from '../../model/types/currency'
import { type CountryType } from '../../model/types/country'
import { currencies } from '../../model/utils/currencies'
import { countries } from '../../model/utils/countries'
import styles from './ProfileCard.module.scss'

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
                    classNameForInputWrapper='firstname'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.firstname as string)}
                />
                <Input
                    value={String(profileForm?.lastname)}
                    onChange={onChangeInputs}
                    id='lastname'
                    label={t('Фамилия')}
                    classNameForInputWrapper='lastname'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.lastname as string)}
                />
                <Input
                    value={String(profileForm?.age)}
                    onChange={onChangeInputs}
                    id='age'
                    label={t('Возраст')}
                    classNameForInputWrapper='age'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.age as string)}
                />
                <Input
                    value={String(profileForm?.city)}
                    onChange={onChangeInputs}
                    id='city'
                    label={t('Город')}
                    classNameForInputWrapper='city'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
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
                    classNameForInputWrapper='username'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.username as string)}
                />
                <Input
                    value={String(profileForm?.avatar)}
                    onChange={onChangeInputs}
                    id='avatar'
                    label={t('Ссылка на аватар')}
                    classNameForInputWrapper='avatar'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                    validError={t(validationErrors?.avatar as string)}
                />
                <ListBoxElement
                    options={currencies}
                    value={String(profileForm?.currency)}
                    onChange={onChangeCurrency}
                    id='currency'
                    label={t('Валюта')}
                    defaultValue={t('Укажите валюту')}
                    classNameForListBox='currency'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
                <ListBoxElement
                    options={countries}
                    value={String(profileForm?.country)}
                    onChange={onChangeCountry}
                    id='country'
                    label={t('Страна')}
                    defaultValue={t('Укажите страну')}
                    classNameForListBox='country'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
            </div>
        </>
    )
}
