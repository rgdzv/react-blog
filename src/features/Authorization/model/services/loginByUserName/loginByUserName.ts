import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { User } from 'entities_/User'
import { userActions } from '../../slice/userSlice/userSlice'

export const loginByUserName = createAsyncThunk<
    User,
    void, // eslint-disable-line @typescript-eslint/no-invalid-void-type
    ThunkConfig<string>
>(
    'loginForm/loginByUserName',
    async (_, { rejectWithValue, getState, dispatch, extra }) => {
        try {
            const { loginForm } = getState()
            const username = loginForm?.username
            const password = loginForm?.password
            const { data } = await extra.axiosAPI.post<User>('/login', {
                username,
                password
            })

            dispatch(userActions.setAuthData(data))

            return data
        } catch (error) {
            if (error.response === undefined) {
                throw error
            }
            return rejectWithValue(error.response.data.message)
        }
    }
)
