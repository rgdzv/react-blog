import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../model/slice/ArticlesPageSlice'
import { type ArticleView } from 'entities_/Article'
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView'
import { type ChangeEvent, useCallback } from 'react'
import { getArticlesPageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch'

interface UseFiltersInterface {
    view: ArticleView
    onChangeView: (view: ArticleView) => void
    search: string
    onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useArticleFilters = (): UseFiltersInterface => {
    const view = useAppSelector(getArticlesPageView)
    const search = useAppSelector(getArticlesPageSearch)
    const dispatch = useAppDispatch()

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view))
        },
        [dispatch]
    )

    const onChangeSearch = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(articlesPageActions.setSearch(e.target.value))
            // dispatch(articlesPageActions.setPage(1));
            // debouncedFetchData();
        },
        [dispatch]
    )

    return {
        view,
        onChangeView,
        search,
        onChangeSearch
    }
}
