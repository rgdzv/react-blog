import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { CurrencyType } from '../../model/types/currency'
import { CountryType } from '../../model/types/country'
import { ProfileCard } from './ProfileCard'

const profileForm = {
    firstname: 'John',
    lastname: 'Doe',
    age: '30',
    city: 'New York',
    username: 'johndoe',
    avatar: 'https://example.com/avatar',
    currency: CurrencyType.EUR,
    country: CountryType.KAZAKHSTAN
}

const onChangeInputs = jest.fn()
const onChangeCurrency = jest.fn()
const onChangeCountry = jest.fn()

describe('ProfileCard', () => {
    test('should render component', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileCard
                        profileForm={profileForm}
                        isLoading={false}
                        readOnly={false}
                        onChangeInputs={onChangeInputs}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        validationErrors={{}}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByRole('textbox', { name: 'Имя:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('textbox', { name: 'Фамилия:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('textbox', { name: 'Возраст:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('textbox', { name: 'Город:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('textbox', { name: 'Имя пользователя:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('textbox', { name: 'Ссылка на аватар:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Валюта:' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Страна:' })
        ).toBeInTheDocument()
    })

    test('should call onChangeInputs when it changes', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileCard
                        profileForm={profileForm}
                        isLoading={false}
                        readOnly={false}
                        onChangeInputs={onChangeInputs}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        validationErrors={{}}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        const inputName = screen.getByRole('textbox', { name: 'Имя:' })

        await user.type(inputName, 'Sam')
        expect(onChangeInputs).toHaveBeenCalledTimes(3)
    })

    test('should call onChangeCurrency when it changes', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileCard
                        profileForm={profileForm}
                        isLoading={false}
                        readOnly={false}
                        onChangeInputs={onChangeInputs}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        validationErrors={{}}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Валюта:' })

        await user.click(button)

        const options = screen.getAllByRole('option')

        await user.click(options[1])

        expect(onChangeCurrency).toHaveBeenCalledTimes(1)
    })

    test('should call onChangeCountry when it changes', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider>
                    <ProfileCard
                        profileForm={profileForm}
                        isLoading={false}
                        readOnly={false}
                        onChangeInputs={onChangeInputs}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        validationErrors={{}}
                    />
                </StoreProvider>
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Страна:' })

        await user.click(button)

        const options = screen.getAllByRole('option')

        await user.click(options[1])

        expect(onChangeCountry).toHaveBeenCalledTimes(1)
    })
})
