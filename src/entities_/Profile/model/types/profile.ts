import { type CountryType } from '../../../Country/model/types/country'
import { type CurrencyType } from '../../../Currency/model/types/currency'

export type ProfileID =
    | 'firstname'
    | 'lastname'
    | 'age'
    | 'city'
    | 'username'
    | 'avatar'

export interface Profile {
    id?: ProfileID
    firstname?: string
    lastname?: string
    age?: number
    currency?: CurrencyType
    country?: CountryType
    city?: string
    username?: string
    avatar?: string
}
