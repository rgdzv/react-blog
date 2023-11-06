import { type Profile } from 'entities_/Profile'

export interface ProfileSchema {
    readOnly: boolean
    data?: Profile
    isLoading: boolean
    error?: string
}
