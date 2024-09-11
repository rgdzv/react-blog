import { Fragment, memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Menu } from '@headlessui/react'
import { AppLink, Button } from '../../../'
import { classNames } from '../../../../lib'
import { mapDirectionClass } from '../../model/consts'
import styles from './DropDown.module.scss'
import type { DropdownDirection } from '../../model/types'

export interface DropdownItem {
    disabled?: boolean
    content: string
    onClick?: () => void
    href?: string
    id: string
}

interface DropDownPropsInterface {
    trigger: ReactElement
    items: DropdownItem[]
    direction: string
}

export const DropDown: FC<DropDownPropsInterface> = memo(
    ({ trigger, items, direction }) => {
        const menuItemsClassName = classNames(styles.menu, {}, [
            mapDirectionClass[direction as DropdownDirection]
        ])

        return (
            <Menu as='div' className={styles.dropDown}>
                <Menu.Button as={Button}>{trigger}</Menu.Button>
                <Menu.Items className={menuItemsClassName}>
                    {items?.map((item) => {
                        if (item.href === undefined) {
                            return (
                                <Menu.Item
                                    key={item.id}
                                    as={Fragment}
                                    disabled={item.disabled}
                                >
                                    {({ active }) => (
                                        <span
                                            className={classNames(styles.item, {
                                                [styles.active]: active
                                            })}
                                            onClick={item.onClick}
                                        >
                                            {item.content}
                                        </span>
                                    )}
                                </Menu.Item>
                            )
                        }

                        return (
                            <Menu.Item
                                key={item.id}
                                as={Fragment}
                                disabled={item.disabled}
                            >
                                {({ active }) => (
                                    <AppLink
                                        to={item.href as string}
                                        className={classNames(styles.item, {
                                            [styles.active]: active
                                        })}
                                    >
                                        {item.content}
                                    </AppLink>
                                )}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        )
    }
)
