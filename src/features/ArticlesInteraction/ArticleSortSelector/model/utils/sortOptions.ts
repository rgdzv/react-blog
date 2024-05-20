import { ArticleSortField } from 'entities_/Article'

export const sortOptions = [
    {
        value: ArticleSortField.CREATED,
        content: ArticleSortField.CREATED
    },
    {
        value: ArticleSortField.TITLE,
        content: ArticleSortField.TITLE
    },
    {
        value: ArticleSortField.VIEWS,
        content: ArticleSortField.VIEWS
    }
]
