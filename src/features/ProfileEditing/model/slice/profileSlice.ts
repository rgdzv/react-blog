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
                state.data = action.payload
                state.form = action.payload
                state.isLoading = false
            })
            .addCase(getProfileData.rejected, (state, action) => {
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
                state.isLoading = false
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.data = action.payload
                    state.form = action.payload
                    state.readOnly = true
                    state.isLoading = false
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                if (action.payload !== undefined) {
                    state.error = action.payload
                } else {
                    state.error = action.error.message
                }
                state.isLoading = false
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
