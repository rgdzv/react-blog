import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UserSchema, type User } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const'

const initialState: UserSchema = {
    initiated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(action.payload)
            )
        },
        logOutUser: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user !== null) {
                state.authData = JSON.parse(user)
            }
            state.initiated = true
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
