import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBoxElement } from 'shared/ui'
import { CurrencyType } from '../model/types/currency'

interface CurrencyPropsInterface {
    label?: string
    value?: string
    onChange?: (currency: CurrencyType) => void
    isLoading?: boolean
    disabled?: boolean
}

const options = [
    { value: CurrencyType.RUB, content: CurrencyType.RUB },
    { value: CurrencyType.EUR, content: CurrencyType.EUR },
    { value: CurrencyType.USD, content: CurrencyType.USD }
]

export const Currency: FC<CurrencyPropsInterface> = ({
    label,
    value,
    onChange,
    isLoading,
    disabled
}) => {
    const { t } = useTranslation(['profile'])
    const defaultValue = t('Укажите валюту')
    return (
        <ListBoxElement
            options={options}
            label={label}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            disabled={disabled}
        />
    )
}
