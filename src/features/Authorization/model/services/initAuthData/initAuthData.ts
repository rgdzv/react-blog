import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { User } from 'entities_/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

        try {
            const { data } = await extra.axiosAPI.get<User>(
                `/users/${userId as string}`
            )

            return data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
