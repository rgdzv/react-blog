import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loginByUserName } from '../../services/loginByUserName/loginByUserName'
import { type LoginSchema } from '../../types/loginSchema'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined
}

export const loginSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        cleanAll: (state) => {
            state.username = ''
            state.password = ''
            state.error = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(loginByUserName.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(loginByUserName.rejected, (state, action) => {
            if (action.payload !== undefined) {
                state.error = action.payload
            } else {
                state.error = action.error.message
            }
            state.isLoading = false
        })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
