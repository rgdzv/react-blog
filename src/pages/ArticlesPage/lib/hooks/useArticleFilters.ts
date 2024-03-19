import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../model/slice/ArticlesPageSlice'
import { type ArticleView } from 'entities_/Article'
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView'
import { useCallback } from 'react'

interface UseFiltersInterface {
    view: ArticleView
    onChangeView: (view: ArticleView) => void
}

export const useArticleFilters = (): UseFiltersInterface => {
    const view = useAppSelector(getArticlesPageView)
    const dispatch = useAppDispatch()

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view))
        },
        [dispatch]
    )

    return {
        view,
        onChangeView
    }
}
