import { type StateSchema } from 'app/providers/StoreProvider'
import { type ValidationResult } from '../../types/profileSchema'

export const getProfileValidErrors = (state: StateSchema): ValidationResult => {
    return state.profile?.validationErrors as ValidationResult
}
