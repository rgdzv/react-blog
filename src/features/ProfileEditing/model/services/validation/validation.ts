import { type Profile } from 'entities_/Profile'

const requiredField = 'Поле обязательно для заполнения!'
const minLength = 'Минимум 2 символа!'
const ageCondition = 'Вам должно быть больше 18 лет!'
const correctNumber = 'Введите корректное число!'

export const validationSchema = (
    data: Profile
): Record<string, string> | undefined => {
    const result: Record<string, string> = {}

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

    if (data.age === '') {
        result.age = requiredField
    } else if (/\D/.test(String(data.age))) {
        result.age = correctNumber
    } else if (Number(data.age) <= 17 && Number(data.age) >= 0) {
        result.age = ageCondition
    }

    if (data.city === '') {
        result.city = requiredField
    }

    if (data.username === '') {
        result.username = requiredField
    } else if (String(data.username).length < 2) {
        result.username = minLength
    }

    if (data.avatar === '') {
        result.avatar = requiredField
    }

    return Object.keys(result).length === 0 ? undefined : result
}
