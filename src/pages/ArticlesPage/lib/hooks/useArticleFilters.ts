import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../model/slice/ArticlesPageSlice'
import {
    type ArticleSortOrder,
    type ArticleSortField,
    type ArticleType,
    type ArticleView
} from 'entities_/Article'
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView'
import { type ChangeEvent, useCallback } from 'react'
import { getArticlesPageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch'
import { getArticlesPageType } from '../../model/selectors/getArticlePageType/getArticlesPageType'
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder'
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort'

interface UseFiltersInterface {
    view: ArticleView
    onChangeView: (view: ArticleView) => void
    search: string
    onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
    type: ArticleType
    onChangeType: (type: ArticleType) => void
    sort: ArticleSortField
    onChangeSort: (newSort: ArticleSortField) => void
    order: ArticleSortOrder
    onChangeOrder: (newOrder: ArticleSortOrder) => void
}

export const useArticleFilters = (): UseFiltersInterface => {
    const view = useAppSelector(getArticlesPageView)
    const search = useAppSelector(getArticlesPageSearch)
    const type = useAppSelector(getArticlesPageType)
    const order = useAppSelector(getArticlesPageOrder)
    const sort = useAppSelector(getArticlesPageSort)
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

    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlesPageActions.setType(type))
            // dispatch(articlesPageActions.setPage(1))
            // fetchData();
        },
        [dispatch]
    )

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort))
            // dispatch(articlesPageActions.setPage(1))
            // fetchData();
        },
        [dispatch]
    )

    const onChangeOrder = useCallback(
        (newOrder: ArticleSortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder))
            // dispatch(articlesPageActions.setPage(1))
            // fetchData();
        },
        [dispatch]
    )

    return {
        view,
        onChangeView,
        search,
        onChangeSearch,
        type,
        onChangeType,
        sort,
        onChangeSort,
        order,
        onChangeOrder
    }
}
