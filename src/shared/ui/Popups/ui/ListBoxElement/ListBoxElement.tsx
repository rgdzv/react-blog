import { type ReactNode, type FC, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Button } from 'shared/ui/Button/Button'
import styles from '../../styles/Popups.module.scss'
import { ArrowIcon } from '../../../../assets'
import { type CurrencyType } from 'entities_/Currency'
import { Skeleton } from '../../../Skeleton/Skeleton'

interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxPropsInterface {
    options: ListBoxItem[]
    label?: string
    defaultValue?: string
    value?: string
    onChange?: (currency: CurrencyType) => void
    isLoading?: boolean
    disabled?: boolean
}

export const ListBoxElement: FC<ListBoxPropsInterface> = ({
    options,
    label,
    defaultValue,
    value,
    onChange,
    isLoading,
    disabled
}) => {
    const labelCondition =
        label !== undefined ? (
            <Listbox.Label className={styles.label}>{label}:</Listbox.Label>
        ) : null

    const valueCondition = value ?? defaultValue
    const optionsBlock = (
        <>
            {labelCondition}
            <div className={styles.content}>
                <Listbox.Button as={Button} className='bordered_currency'>
                    {valueCondition}
                    <ArrowIcon
                        data-testid='arrow-icon'
                        className={styles.icon}
                    />
                </Listbox.Button>
                <Transition as={Fragment}>
                    <Listbox.Options className={styles.options}>
                        {options.map((option) => (
                            <Listbox.Option
                                key={option.value}
                                value={option.value}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li className={styles.option}>
                                        {selected}
                                        {option.content}
                                    </li>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </>
    )

    const showContentCondition = isLoading === true ? <Skeleton /> : optionsBlock

    return (
        <Listbox
            as='div'
            className={styles.listBox}
            value={value}
            onChange={onChange}
            disabled={disabled}
        >
            {showContentCondition}
        </Listbox>
    )
}
