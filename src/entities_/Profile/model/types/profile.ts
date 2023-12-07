import { type CountryType } from './country'
import { type CurrencyType } from './currency'

export type ProfileInputs =
    | 'firstname'
    | 'lastname'
    | 'age'
    | 'city'
    | 'username'
    | 'avatar'

export type ProfileListboxes = 'currency' | 'country'

export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    currency?: CurrencyType
    country?: CountryType
    city?: string
    username?: string
    avatar?: string
}
