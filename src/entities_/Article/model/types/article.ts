import type { User } from 'entities_/User'
import type { ArticleBlock } from 'entities_/ArticleDetails'
import type { ArticleType } from '../const/articleConst'

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    created: number
    userId: string
    type: ArticleType[]
    blocks: ArticleBlock[]
    user: User
}
