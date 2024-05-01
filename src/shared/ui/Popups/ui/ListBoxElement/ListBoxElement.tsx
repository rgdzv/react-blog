import { type ReactNode, type FC, Fragment, memo } from 'react'
import { Listbox } from '@headlessui/react'
import { Button } from '../../../Button/Button'
import styles from './ListBoxElement.module.scss'
import { ArrowIcon, DoneIcon } from '../../../../assets'
import { Skeleton } from '../../../Skeleton/Skeleton'
import { classNames } from '../../../../lib/classNames/classNames'
import { type CountryType, type CurrencyType } from 'entities_/Profile'

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
    onChange?: ((value: CurrencyType) => void) | ((value: CountryType) => void)
    classNameForListBox?: string
    isLoading?: boolean
    disabled?: boolean
}

export const ListBoxElement: FC<ListBoxPropsInterface> = memo(
    ({
        options,
        label,
        id,
        defaultValue,
        value,
        onChange,
        classNameForListBox,
        isLoading,
        disabled
    }) => {
        const listBoxClassName = classNames(styles.listBox, {}, [
            styles[classNameForListBox as 'currency' | 'country']
        ])

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
                        name={id}
                    >
                        {valueCondition}
                        <ArrowIcon
                            data-testid='arrow-icon'
                            className={styles.icon}
                        />
                    </Listbox.Button>
                    <Listbox.Options className={styles.options}>
                        {options.map((option: ListBoxItem) => (
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
                </div>
            </>
        )

        const showContentCondition =
            isLoading === true ? <Skeleton type='profileInput' /> : optionsBlock

        return (
            <Listbox
                as='div'
                className={listBoxClassName}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                {showContentCondition}
            </Listbox>
        )
    }
)
