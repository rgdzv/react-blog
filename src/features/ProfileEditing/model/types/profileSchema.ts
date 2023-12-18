import { type Profile } from 'entities_/Profile'

export type ValidationResult = Omit<Profile, 'currency' | 'country' | 'id'>

export interface ProfileSchema {
    readOnly: boolean
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    validationErrors?: ValidationResult
}
