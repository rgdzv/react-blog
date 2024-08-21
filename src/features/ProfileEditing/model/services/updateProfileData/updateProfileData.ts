import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { Profile } from 'entities_/Profile'

export const updateProfileData = createAsyncThunk<
    Profile,
    void, // eslint-disable-line @typescript-eslint/no-invalid-void-type
    ThunkConfig<void>
>(
    'profile/updateProfileData',
    async (_, { rejectWithValue, extra, getState }) => {
        const { profile } = getState()
        const profileID = String(profile?.form?.id)

        try {
            const response = await extra.axiosAPI.put<Profile>(
                `/profile/${profileID}`,
                profile?.form
            )

            return response.data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
