import { type ChangeEvent, type FC } from 'react'
import { Input, ListBoxElement } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import {
    type ProfileInputs,
    type Profile,
    type ProfileListboxes
} from '../../model/types/profile'
import { inputsArray } from '../../model/utils/inputsArray'
import { listboxArray } from '../../model/utils/listboxArray'
import { type CurrencyType } from '../../model/types/currency'
import { type CountryType } from '../../model/types/country'
import { currencies } from '../../model/utils/currencies'
import { countries } from '../../model/utils/countries'

interface ProfileCardPropsInterface {
    profileForm: Profile
    isLoading: boolean
    readOnly: boolean
    onChangeInputs?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCurrency?: (currency: CurrencyType) => void
    onChangeCountry?: (country: CountryType) => void
}

export const ProfileCard: FC<ProfileCardPropsInterface> = ({
    profileForm,
    isLoading,
    readOnly,
    onChangeInputs,
    onChangeCurrency,
    onChangeCountry
}) => {
    const { t } = useTranslation('profile')

    const inputs = inputsArray.map((item) => {
        const label = t(item.label)
        const value = String(profileForm?.[item.id as ProfileInputs])
        const type = item.id === 'age' ? 'number' : 'text'
        const min = item.id === 'age' ? '0' : ''
        const max = item.id === 'age' ? '100' : ''

        return (
            <Input
                key={item.id}
                type={type}
                value={value}
                onChange={onChangeInputs}
                id={item.id}
                label={label}
                classNameForInputWrapper={item.id}
                classNameForLabel='profile_label'
                classNameForInput='profile_input'
                isLoading={isLoading}
                disabled={readOnly}
                min={min}
                max={max}
            />
        )
    })

    const listBoxes = listboxArray.map((item) => {
        const label = t(item.label)
        const optionsCondition = item.id === 'currency' ? currencies : countries
        const value = String(profileForm?.[item.id as ProfileListboxes])
        const defaultValue =
            item.id === 'currency' ? t('Укажите валюту') : t('Укажите страну')
        const onChangeCondition =
            item.id === 'currency' ? onChangeCurrency : onChangeCountry

        return (
            <ListBoxElement
                key={item.id}
                options={optionsCondition}
                value={value}
                onChange={onChangeCondition}
                id={item.id}
                label={label}
                defaultValue={defaultValue}
                classNameForListBox={item.id}
                isLoading={isLoading}
                disabled={readOnly}
            />
        )
    })

    return (
        <>
            {inputs}
            {listBoxes}
        </>
    )
}
