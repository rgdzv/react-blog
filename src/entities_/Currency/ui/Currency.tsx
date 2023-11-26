import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBoxElement } from 'shared/ui'
import { CurrencyType } from '../model/types/currency'

const options = [
    { value: CurrencyType.RUB, content: CurrencyType.RUB, disabled: true },
    { value: CurrencyType.EUR, content: CurrencyType.EUR },
    { value: CurrencyType.USD, content: CurrencyType.USD }
]
interface CurrencyPropsInterface {
    label?: string
    id?: string
    value?: string
    onChange?: (currency: CurrencyType) => void
    isLoading?: boolean
    disabled?: boolean
}

export const Currency: FC<CurrencyPropsInterface> = ({
    label,
    id,
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
            id={id}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            disabled={disabled}
        />
    )
}
