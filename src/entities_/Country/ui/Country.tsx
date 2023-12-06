import { type FC } from 'react'
import { type CountryType } from '../model/types/country'
import { ListBoxElement } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { countries } from '../model/utils/countries'

interface CountryPropsInterface {
    value?: string
    onChange?: (country: CountryType) => void
    isLoading?: boolean
    disabled?: boolean
}

export const Country: FC<CountryPropsInterface> = ({
    value,
    onChange,
    isLoading,
    disabled
}) => {
    const { t } = useTranslation('profile')
    const defaultValue = t('Укажите страну')
    const profileCountry = t('Страна')

    return (
        <ListBoxElement
            options={countries}
            label={profileCountry}
            id='country'
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            disabled={disabled}
        />
    )
}
