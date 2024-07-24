import { type ArticleComment } from 'entities_/ArticleComment'

export type ArticleCommentGetParams = Omit<
    ArticleComment,
    'id' | 'userId' | 'text'
>
