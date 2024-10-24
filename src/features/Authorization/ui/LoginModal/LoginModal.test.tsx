import { createRef } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from '../../model/slice/loginSlice/loginSlice'
import { LoginModal } from './LoginModal'

const preloadedState = {
    loginForm: {
        username: 'Alex',
        password: '12345',
        isLoading: false,
        error: undefined
    }
}

const reducersMock = {
    loginForm: loginReducer
}

const propsMock = {
    dialogRef: createRef<HTMLDialogElement>(),
    isClosing: false,
    closeModal: jest.fn(),
    onClickOutside: jest.fn(),
    onClickCloseButton: jest.fn()
}

describe('LoginModal', () => {
    test('should render component correctly and show passed values of inputs', () => {
        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <LoginModal {...propsMock} />
                </StoreProvider>
            </MemoryRouter>
        )
        expect(screen.getByTestId('modal')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Имя пользователя')).toHaveValue(
            'Alex'
        )
        expect(screen.getByPlaceholderText('Пароль')).toHaveValue('12345')
    })

    test('should disable login button when isLoading is true', () => {
        const modifiedState = {
            loginForm: {
                ...preloadedState.loginForm,
                isLoading: true
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <LoginModal {...propsMock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const loginButton = screen.getByRole('button', {
            name: 'Войти',
            hidden: true
        })

        expect(loginButton).toBeDisabled()
    })

    test('should show error', () => {
        const modifiedState = {
            loginForm: {
                ...preloadedState.loginForm,
                error: 'Тестовая ошибка!'
            }
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={modifiedState}
                    asyncReducers={reducersMock}
                >
                    <LoginModal {...propsMock} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByText('Тестовая ошибка!')).toBeInTheDocument()
    })

    test('should show class closing when isClosing is true', () => {
        const modifiedProps = {
            ...propsMock,
            isClosing: true
        }

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <LoginModal {...modifiedProps} />
                </StoreProvider>
            </MemoryRouter>
        )

        expect(screen.getByTestId('modal')).toHaveClass('closing')
    })

    test('should call onClickCloseButton when close button is clicked', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <StoreProvider
                    initialState={preloadedState}
                    asyncReducers={reducersMock}
                >
                    <LoginModal {...propsMock} />
                </StoreProvider>
            </MemoryRouter>
        )

        const closeButton = screen.getByRole('button', {
            name: 'Закрыть',
            hidden: true
        })

        await user.click(closeButton)

        expect(propsMock.onClickCloseButton).toHaveBeenCalledTimes(1)
    })
})
