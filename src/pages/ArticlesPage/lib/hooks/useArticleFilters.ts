import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import {
    type ArticleSortField,
    type ArticleSortOrder,
    type ArticleType,
    type ArticleView
} from 'entities_/Article'
import { type ChangeEvent, useCallback } from 'react'
import { useDebounce } from 'shared/lib'
import { articlesActions } from '../../model/slice/ArticlesSlice'
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView'
import { getArticlesSearch } from '../../model/selectors/getArticlesSearch/getArticlesSearch'
import { getArticlesType } from '../../model/selectors/getArticleType/getArticlesType'
import { getArticlesOrder } from '../../model/selectors/getArticlesOrder/getArticlesOrder'
import { getArticlesSort } from '../../model/selectors/getArticlesSort/getArticlesSort'
import { getArticlesList } from '../../model/services/getArticlesList/getArticlesList'

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
    const view = useAppSelector(getArticlesView)
    const search = useAppSelector(getArticlesSearch)
    const type = useAppSelector(getArticlesType)
    const order = useAppSelector(getArticlesOrder)
    const sort = useAppSelector(getArticlesSort)
    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        void dispatch(getArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesActions.setView(view))
        },
        [dispatch]
    )

    const onChangeSearch = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(articlesActions.setSearch(e.target.value))
            dispatch(articlesActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData]
    )

    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlesActions.setType(type))
            dispatch(articlesActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData]
    )

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesActions.setSort(newSort))
            dispatch(articlesActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData]
    )

    const onChangeOrder = useCallback(
        (newOrder: ArticleSortOrder) => {
            dispatch(articlesActions.setOrder(newOrder))
            dispatch(articlesActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData]
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
