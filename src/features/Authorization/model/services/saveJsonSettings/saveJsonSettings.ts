import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { JsonSettings, User } from 'entities_/User'

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, extra } = thunkApi

    const state = getState()
    const userId = state.user?.authData?.id
    const oldJsonSettings = state.user?.authData?.jsonSettings

    try {
        const { data } = await extra.axiosAPI.patch<User>(
            `/users/${userId as string}`,
            {
                jsonSettings: {
                    ...oldJsonSettings,
                    ...newJsonSettings
                }
            }
        )

        return data.jsonSettings as JsonSettings
    } catch (error) {
        if (error.response === undefined) {
            throw error
        }
        return rejectWithValue(error.response.data.message)
    }
})
