import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '../../const'

export const axiosAPI = axios.create({
    baseURL: __API__
})

axiosAPI.interceptors.request.use((config) => {
    if (config.headers !== undefined) {
        config.headers.Authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? ''
    }
    return config
})
