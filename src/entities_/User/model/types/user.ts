import { type JsonSettings } from './jsonSettings'

export interface FeatureFlags {
    isArticleRatingEnabled?: boolean
    isCounterEnabled?: boolean
    isAppRedesigned?: boolean
}

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER'
}

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
    jsonSettings?: JsonSettings
}

export interface UserSchema {
    authData?: User
    initiated: boolean
}
