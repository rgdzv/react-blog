export enum Currency {
    'RUB' = 'RUB',
    'EUR' = 'EUR',
    'USD' = 'USD'
}

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
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
