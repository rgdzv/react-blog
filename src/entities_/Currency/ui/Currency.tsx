import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBoxElement } from 'shared/ui'
import { type CurrencyType } from '../model/types/currency'
import { currencies } from '../model/utils/currencies'

interface CurrencyPropsInterface {
    value?: string
    onChange?: (currency: CurrencyType) => void
    isLoading?: boolean
    disabled?: boolean
}

export const Currency: FC<CurrencyPropsInterface> = ({
    value,
    onChange,
    isLoading,
    disabled
}) => {
    const { t } = useTranslation(['profile'])
    const defaultValue = t('Укажите валюту')
    const profileCurrency = t('Валюта')

    return (
        <ListBoxElement
            options={currencies}
            label={profileCurrency}
            id='currency'
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            disabled={disabled}
        />
    )
}
