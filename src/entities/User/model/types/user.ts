import { type JsonSettings } from './jsonSettings'

export interface FeatureFlags {
    isArticleRatingEnabled?: boolean
    isCounterEnabled?: boolean
    isAppRedesigned?: boolean
}

enum UserRole {
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
