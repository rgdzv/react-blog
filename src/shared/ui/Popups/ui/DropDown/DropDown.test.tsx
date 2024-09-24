import { createElement } from 'react'
import { render, screen } from '@testing-library/react'
import { DropDown } from './DropDown'

describe('DropDown', () => {
    const items = [
        {
            id: 'settings',
            content: 'Настройки',
            href: `/`
        },
        {
            id: 'profile',
            content: 'Профиль',
            href: `/`
        }
    ]
    test('render', () => {
        const image = createElement('img')
        render(<DropDown trigger={image} direction='' items={items} />)
        const dropdownMenu = screen.getByTestId('dropdown-menu')
        expect(dropdownMenu).toBeInTheDocument()
        screen.debug()
    })
})
