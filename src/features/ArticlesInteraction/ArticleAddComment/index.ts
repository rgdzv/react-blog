export type { ArticleCommentSchema } from './model/types/articleCommentSchema'
export { getArticleComments } from './model/services/getArticleComments/getArticleComments'
export { articleCommentsReducer } from './model/slice/articleCommentSlice'
export { ArticleCommentContainer } from './ui/ArticleCommentContainer/ArticleCommentContainer'
export { getArticleCommentError } from './model/selectors/getArticleCommentError/getArticleCommentError'
export { getArticleCommentIsLoading } from './model/selectors/getArticleCommentIsLoading/getArticleCommentIsLoading'
