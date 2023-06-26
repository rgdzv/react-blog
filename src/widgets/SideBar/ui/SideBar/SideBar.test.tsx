import { SideBar } from './SideBar'
import { render, screen } from '@testing-library/react'

jest.mock("widgets/LangSwitcher")
jest.mock("widgets/ThemeSwitcher")

describe('SideBar', () => {
    test('render', () => {
        render(<SideBar/>)
        screen.debug()
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
