import { createAsyncThunk } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'
import axios from 'axios'
import { type User } from 'entities/User'

export const loginByUserName = createAsyncThunk<
    User,
    void, // eslint-disable-line @typescript-eslint/no-invalid-void-type
    { rejectValue: string; state: StateSchema }
>(
    'loginForm/loginByUserName',
    async (_, { rejectWithValue, getState }): Promise<User | any> => {
        try {
            const { loginForm } = getState()
            const username = loginForm?.username
            const password = loginForm?.password
            const { data } = await axios.post<User>(
                'http://localhost:8000/login',
                {
                    username,
                    password
                }
            )
            return data
        } catch (error) {
            rejectWithValue('error!')
        }
    }
)
