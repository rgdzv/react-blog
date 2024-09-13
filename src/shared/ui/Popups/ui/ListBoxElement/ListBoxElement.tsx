/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Fragment, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox } from '@headlessui/react'
import { Skeleton } from '../../../Skeleton/Skeleton'
import { Button } from '../../../Button/Button'
import { ArrowIcon, DoneIcon } from '../../../../assets'
import { classNames } from '../../../../lib/classNames/classNames'
import styles from './ListBoxElement.module.scss'

interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

type classNameForListBoxType = 'currency' | 'country' | 'articleSort'

interface ListBoxPropsInterface {
    options: ListBoxItem[]
    label?: string
    id?: string
    defaultValue?: string
    value?: string
    onChange?: (value: any) => void
    classNameForListBox?: classNameForListBoxType
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
        const { t } = useTranslation(['profile', 'article'])

        const listBoxClassName = classNames(styles.listBox, {}, [
            styles[classNameForListBox as classNameForListBoxType]
        ])

        const labelCondition =
            label !== undefined ? (
                <Listbox.Label className={styles.label} htmlFor={id}>
                    {t(label)}:
                </Listbox.Label>
            ) : null

        const valueCondition =
            t(value as string, { ns: ['profile', 'article'] }) ||
            t(defaultValue as string, { ns: ['profile', 'article'] })

        const optionsBlock = (
            <>
                {labelCondition}
                <div className={styles.content}>
                    <Listbox.Button
                        as={Button}
                        className='bordered_listbox'
                        id={id}
                        name={id}
                    >
                        {valueCondition}
                        <ArrowIcon data-testid='arrow-icon' />
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
                                        <span>
                                            {t(option.content as string, {
                                                ns: ['profile', 'article']
                                            })}
                                        </span>
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
