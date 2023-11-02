import { type Profile } from 'entities_/Profile'

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
}
