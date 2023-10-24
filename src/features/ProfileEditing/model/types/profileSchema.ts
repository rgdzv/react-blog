import { type Profile } from 'entities/Profile'

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
}
