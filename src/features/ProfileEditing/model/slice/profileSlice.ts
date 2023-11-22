import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profileSchema'
import { getProfileData } from '../services/getProfileData/getProfileData'
import { type Profile } from 'entities_/Profile'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    readOnly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        startEdit: (state) => {
            state.readOnly = false
        },
        cancelEdit: (state) => {
            state.readOnly = true
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(getProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(getProfileData.rejected, (state, action) => {
                state.isLoading = false
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false
                    state.data = action.payload
                    state.form = action.payload
                    state.readOnly = true
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
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
