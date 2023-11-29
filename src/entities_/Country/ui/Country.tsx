import { type FC } from 'react'
import { type CountryType } from '../model/types/country'
import { ListBoxElement } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { countries } from '../model/utils/countries'

interface CountryPropsInterface {
    label?: string
    id?: string
    value?: string
    onChange?: (country: CountryType) => void
    isLoading?: boolean
    disabled?: boolean
}

export const Country: FC<CountryPropsInterface> = ({
    label,
    id,
    value,
    onChange,
    isLoading,
    disabled
}) => {
    const { t } = useTranslation(['profile'])
    const defaultValue = t('Укажите страну')

    return (
        <ListBoxElement
            options={countries}
            label={label}
            id={id}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            disabled={disabled}
        />
    )
}
