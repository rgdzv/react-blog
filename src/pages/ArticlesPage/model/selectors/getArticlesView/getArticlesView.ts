import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities_/Article'

export const getArticlesView = (state: StateSchema): ArticleView =>
    (state.articles?.view ?? ArticleView.BIG) as ArticleView
