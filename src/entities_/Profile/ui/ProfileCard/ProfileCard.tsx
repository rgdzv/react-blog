import { type ChangeEvent, type FC } from 'react'
import { Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type ProfileID, type Profile } from '../../model/types/profile'
import { Currency, type CurrencyType } from 'entities_/Currency'
import { Country, type CountryType } from 'entities_/Country'
import { inputsArray } from '../../model/utils/inputsArray'
// import { listboxArray } from '../../model/utils/listboxArray'

interface ProfileCardPropsInterface {
    profileForm: Profile
    isLoading: boolean
    readOnly: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCurrency?: (currency: CurrencyType) => void
    onChangeCountry?: (country: CountryType) => void
}

export const ProfileCard: FC<ProfileCardPropsInterface> = ({
    profileForm,
    isLoading,
    readOnly,
    onChange,
    onChangeCurrency,
    onChangeCountry
}) => {
    const { t } = useTranslation('profile')

    const profileCurrencyValue = String(profileForm?.currency)
    const profileCountryValue = String(profileForm?.country)

    const inputs = inputsArray.map((item) => {
        const label = t(item.label)
        const value = profileForm?.[item.id as ProfileID]
        const type = item.id === 'age' ? 'number' : 'text'
        const min = item.id === 'age' ? '0' : ''
        const max = item.id === 'age' ? '100' : ''

        return (
            <Input
                key={item.id}
                type={type}
                value={value}
                onChange={onChange}
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

    // const listBoxes = listboxArray.map((item) => {
    //     return <ListBoxElement key={item.id} />
    // })

    return (
        <>
            {inputs}
            <Currency
                value={profileCurrencyValue}
                onChange={onChangeCurrency}
                isLoading={isLoading}
                disabled={readOnly}
            />
            <Country
                value={profileCountryValue}
                onChange={onChangeCountry}
                isLoading={isLoading}
                disabled={readOnly}
            />
        </>
    )
}
