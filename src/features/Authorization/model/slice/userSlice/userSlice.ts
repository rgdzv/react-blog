import { createSlice } from '@reduxjs/toolkit'
import type { JsonSettings, User } from 'entities_/User'
import { LOCAL_STORAGE_THEME_KEY, USER_LOCALSTORAGE_KEY } from 'shared/const'
import type { Theme } from 'shared/types'
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
            localStorage.setItem(
                LOCAL_STORAGE_THEME_KEY,
                action.payload.jsonSettings?.theme as Theme
            )
        },
        logOutUser: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            localStorage.removeItem(LOCAL_STORAGE_THEME_KEY)
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
        builder.addCase(saveJsonSettings.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData !== undefined) {
                    state.authData.jsonSettings = action.payload
                }
                state.isLoading = false
            }
        )
        builder.addCase(saveJsonSettings.rejected, (state, action) => {
            if (action.payload !== undefined) {
                state.error = action.payload
            } else {
                state.error = action.error.message
            }
            state.isLoading = false
        })
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
