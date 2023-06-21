import { render, screen } from '@testing-library/react'
import { SideBar } from './SideBar'

describe('SideBar', () => {
    test('render', () => {
        render(<SideBar/>)
        screen.debug()
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
