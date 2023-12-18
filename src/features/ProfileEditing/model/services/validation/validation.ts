import { type Profile } from 'entities_/Profile'
import { type ValidationResult } from '../../types/profileSchema'

const requiredField = 'Поле обязательно для заполнения!'
const minLength = 'Минимум 2 символа!'

export const validationSchema = (data: Profile): ValidationResult => {
    const result: ValidationResult = {}

    if (data.firstname === '') {
        result.firstname = requiredField
    } else if (String(data.firstname).length < 2) {
        result.firstname = minLength
    }

    if (data.lastname === '') {
        result.lastname = requiredField
    } else if (String(data.lastname).length < 2) {
        result.lastname = minLength
    }

    return result
}
