import type { UserRole } from '../const/userConst'
import type { JsonSettings } from './jsonSettings'

export interface FeatureFlags {
    isArticleRatingEnabled?: boolean
    isCounterEnabled?: boolean
    isAppRedesigned?: boolean
}

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
    jsonSettings?: JsonSettings
}
