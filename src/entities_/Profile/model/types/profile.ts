import { type CountryType } from '../../../Country/model/types/country'
import { type CurrencyType } from '../../../Currency/model/types/currency'

export enum Country {
    Russia = 'Russia',
    Belarus = 'Belarus',
    Ukraine = 'Ukraine',
    Kazakhstan = 'Kazahstan',
    Armenia = 'Armenia'
}

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: CurrencyType
    country?: CountryType
    city?: string
    username?: string
    avatar?: string
}
