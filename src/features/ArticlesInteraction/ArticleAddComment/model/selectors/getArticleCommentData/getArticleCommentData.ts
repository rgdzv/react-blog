import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleCommentType } from 'entities_/ArticleComment'

export const getArticleCommentData = (
    state: StateSchema
): ArticleCommentType[] => {
    return state?.articleComments?.data as ArticleCommentType[]
}
