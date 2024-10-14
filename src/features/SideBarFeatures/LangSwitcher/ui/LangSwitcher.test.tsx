import { I18nextProvider } from 'react-i18next'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { i18nForTests } from 'shared/lib'
import { LangSwitcher } from './LangSwitcher'

describe('LangSwitcher', () => {
    test('should render component correctly', async () => {
        render(
            <I18nextProvider i18n={i18nForTests()}>
                <LangSwitcher />
            </I18nextProvider>
        )

        const button = screen.getByRole('button', { name: 'ru' })
        expect(button).toBeInTheDocument()
    })

    test('should call handleToggleMock when button is clicked and change name of button', async () => {
        const user = userEvent.setup()
        const handleToggleMock = jest.fn()

        render(
            <I18nextProvider i18n={i18nForTests()}>
                <LangSwitcher />
            </I18nextProvider>
        )

        const button = screen.getByRole('button', { name: 'ru' })

        button.onclick = handleToggleMock

        await user.click(button)

        expect(handleToggleMock).toHaveBeenCalledTimes(1)
        expect(screen.getByRole('button', { name: 'en' })).toBeInTheDocument()
    })
})
