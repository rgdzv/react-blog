import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profileSchema'
import { getProfileData } from '../services/getProfileData/getProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(getProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(getProfileData.rejected, (state, action) => {
                state.isLoading = false
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
