import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities_/Profile'

export const getProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>('profile/getProfileData', async (profileID, { rejectWithValue, extra }) => {
    try {
        const { data } = await extra.axiosAPI.get<Profile>(
            `/profile/${profileID}`
        )
        return data
    } catch (error) {
        if (error.response === undefined) {
            throw error
        }
        return rejectWithValue(error.response.data.message)
    }
})
