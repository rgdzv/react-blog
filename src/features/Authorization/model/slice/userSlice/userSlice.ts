import { createSlice } from '@reduxjs/toolkit'
import type { JsonSettings, User } from 'entities_/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const'
import { initAuthData } from '../../services/initAuthData/initAuthData'
import { saveJsonSettings } from '../../services/saveJsonSettings/saveJsonSettings'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserSchema } from '../../types/userSchema'

const initialState: UserSchema = {
    initiated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id)
        },
        logOutUser: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            initAuthData.fulfilled,
            (state, action: PayloadAction<User>) => {
                state.authData = action.payload
                state.initiated = true
            }
        )
        builder.addCase(initAuthData.rejected, (state) => {
            state.initiated = true
        })
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData !== undefined) {
                    state.authData.jsonSettings = action.payload
                }
            }
        )
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
