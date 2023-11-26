import { type ReactNode, type FC, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Button } from 'shared/ui/Button/Button'
import styles from '../../styles/Popups.module.scss'
import { ArrowIcon, DoneIcon } from '../../../../assets'
import { type CurrencyType } from 'entities_/Currency'
import { Skeleton } from '../../../Skeleton/Skeleton'
import { classNames } from '../../../../lib/classNames/classNames'

interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxPropsInterface {
    options: ListBoxItem[]
    label?: string
    id?: string
    defaultValue?: string
    value?: string
    onChange?: (currency: CurrencyType) => void
    isLoading?: boolean
    disabled?: boolean
}

export const ListBoxElement: FC<ListBoxPropsInterface> = ({
    options,
    label,
    id,
    defaultValue,
    value,
    onChange,
    isLoading,
    disabled
}) => {
    const labelCondition =
        label !== undefined ? (
            <Listbox.Label className={styles.label} htmlFor={id}>
                {label}:
            </Listbox.Label>
        ) : null

    const valueCondition = value ?? defaultValue
    const optionsBlock = (
        <>
            {labelCondition}
            <div className={styles.content}>
                <Listbox.Button
                    as={Button}
                    className='bordered_currency'
                    id={id}
                >
                    {valueCondition}
                    <ArrowIcon
                        data-testid='arrow-icon'
                        className={styles.icon}
                    />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave='ease-out'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className={styles.options}>
                        {options.map((option) => (
                            <Listbox.Option
                                as={Fragment}
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(styles.option, {
                                            [styles.active]: active,
                                            [styles.selected]: selected
                                        })}
                                    >
                                        {selected && (
                                            <DoneIcon
                                                data-testid='done-icon'
                                                className={styles.doneIcon}
                                            />
                                        )}
                                        <span>{option.content}</span>
                                    </li>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </>
    )

    const showContentCondition =
        isLoading === true ? <Skeleton /> : optionsBlock

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
