import { type User } from '../../../User/model/types/user'

export interface ArticleCommentType {
    id: string
    text: string
    articleId: string
    userId: string
    user: User
}
