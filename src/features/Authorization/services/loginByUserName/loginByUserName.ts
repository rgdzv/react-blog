import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type ThunkExtraArg,
    type StateSchema
} from 'app/providers/StoreProvider'
import { userActions, type User } from 'entities/User'

export const loginByUserName = createAsyncThunk<
    User,
    void, // eslint-disable-line @typescript-eslint/no-invalid-void-type
    { rejectValue: string; state: StateSchema; extra: ThunkExtraArg }
>(
    'loginForm/loginByUserName',
    async (
        _,
        { rejectWithValue, getState, dispatch, extra }
    ): Promise<User | any> => {
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
